import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../Data/StateProvider';
import { getBasketDetail } from '../../Data/reducer';
import { useHistory } from 'react-router-dom';
const Subtotal=()=>{
const [{basket},dispatch]=useStateValue();
const value=getBasketDetail(basket);
const history=useHistory();
console.log(value);  
  return(
        <div className="subtotal">
            <CurrencyFormat renderText={
                (value)=>(
                <>
                <p>SubTotal ({basket?.length} items):<strong>{value}</strong></p>
                <small className="subtotal__gift">
                    <input type="checkbox" />
                    This order contins gift!
                </small>
                </>
            )}
            
            decimalScale={2}
            value={getBasketDetail(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"\u20B9"}/> 
            {/* \u20B9 for rupee symbol */}
            <button onClick={(e)=>history.push("/payment")}>Proceed to Checkout</button>
        </div>
        
    )
}
export default Subtotal;