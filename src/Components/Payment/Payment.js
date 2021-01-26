import React, { useEffect, useState } from 'react';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import { getBasketDetail } from '../../Data/reducer';
import { useStateValue } from '../../Data/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import axios from "../../axios/axios";
import "./Payment.css";
import { db } from '../../Firebase';

const Payment=()=>{
  const [{basket,user},dispatch]=useStateValue();
  const history=useHistory();
 
  const [error,setError]=useState(null);
  const [disabled,setDisabled]=useState(true);
  const [processing,setProcessing]=useState(false);
  const [succeeded,setSucceeded]=useState(false);
  const [clientSecret,setClientSecret]=useState(true);
 
 
  const stripe=useStripe(); 
  const elements=useElements();
 
 //most important....!
  useEffect(()=>{
     //generate the special stripe secret which allows us to charge a customer
     const getClientSecret=async ()=>{
        const response=await axios({
            method:'POST',
            //stripe expects the total in a currenices in subunits
            url:`/payments/create?total=${getBasketDetail(basket)*100}`
        })
        setClientSecret(response.data.clientSecret);
     }
     getClientSecret();
   },[basket] );
  
   console.log("THe secret is >>>>" +clientSecret);
   console.log(user);
  
   const handelSubmit= async event=>{
       //do all the fancy tripe stuff

       event.preventDefault();
       setProcessing(true);

       const payload=await stripe.confirmCardPayment(clientSecret,{
           payment_method:{
               card:elements.getElement(CardElement)
           }
       }).then(({paymentIntent})=>{
           //paymentIntent == payment Confirmation
           db.collection("users").doc(user?.uid).collection("orders").doc(paymentIntent.id).set({
               basket:basket,
               amount:paymentIntent.amount,
               created:paymentIntent.created
           })
           
           
           setSucceeded(false);
           setError(null);
           setProcessing(false);

           dispatch({
               type:"EMPTY_BASKET"
           })
           history.replace("/orders")
       })
  }

 
 
  const handleChange=(event)=>{
      //do some stuff
      //disply any error if coustomer type any card details,
      setDisabled(event.empty);
      setError(event.error?event.error.message:""); 
  }
  return(
        <div className="payment">
          <div className="payment__container">
             
             <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
              <div className="payment__section">
                 <div className="payment__title">
                      <h2>Delivery Address</h2>
                   </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>BDA COLONY</p> 
                    <p>Chandrasekherpur</p>
                    <p>Bhubaneswar</p>
                </div>  
              </div>

              <div className="payment__section">
                  <div className="payment__title">
                      <h2>Review items and Delivery </h2>
                  </div>
                  <div className="payment__items">
                       {basket.map((item)=>(
                           <CheckoutProduct ID={item._ID}
                           title={item.title}
                           price={item.price} 
                           image={item.image}
                           rating={item.rating}/>
                       ))}
                  </div>
              </div>


              <div className="payment__section">
                <div className="payment__title">
                    <h2>Payment Method</h2>
                </div>
                <div className="payment__details">
                    {/* stipes */}
                    <form onSubmit={handelSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment__priceContainer">
                        <CurrencyFormat renderText={
                                (value)=>(
                             <>
                             <h3>Order total :{value}</h3>
                             </>
            )}
            
                    decimalScale={2}
                    value={getBasketDetail(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"\u20B9"}/>

                    <button disabled={processing||disabled||succeeded}>
                        <span>{processing?<p>processing</p>:"BUY NOW"}</span>
                    </button>

                        </div>
                        {/* errors */}
                        {error&&<div>{error}</div>}
                    </form>
                </div>
              </div>
          </div>
        </div>
    );
}
export default Payment;