import React from 'react'
import { useStateValue } from '../../Data/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css'
const Checkout=()=>{
 const [{basket,user},dispatch]=useStateValue();
 
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img  className="checkout__ad" src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" alt="add" />
            
               <div className="checkout__title">
                 <h3>Hello,{user?.email}</h3>
                <h2> Your Shopping Basket</h2> 
                     {basket.map((item,index)=>
                        <CheckoutProduct ID={item._ID}
                                          title={item.title}
                                          image={item.image}
                                          price={item.price}
                                          rating={item.rating}/>
                    )}   

{/*                     
                                    <CheckoutProduct ID="886868"
                                     title="jygjfjdcjydgjyxg,hggsrxfsewu6tbggdrsht,vhhdtydthdhtdhthcfthf"
                                     image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY218_.jpg"
                                     price={6768}
                                     rating={5}/> 
                 
                    
                     <CheckoutProduct ID="886868"
                                     title="Redmi Note 9 Pro (Glacier White, 4GB RAM, 64GB Storage) "
                                     image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY218_.jpg"
                                     price={6768}
                                     rating={5}/>
                    <CheckoutProduct ID="886868"
                                     title="jygjfjdcjydgjyxg,hggsrxfsewu6tbggdrsht,vhhdtydthdhtdhthcfthf"
                                     image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY218_.jpg"
                                     price={6768}
                                     rating={5}/>  */}
                 
                </div>
        </div>
        <div className="checkout__right">
            <Subtotal />
            

        </div>
        </div>
    )
}

export default Checkout;
