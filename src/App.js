//import { Link } from '@material-ui/core';
import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Payment from "./Components/Payment/Payment";
import { useStateValue } from './Data/StateProvider';
import { auth } from './Firebase';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Components/Order/Orders';

const promise=loadStripe('pk_test_51IAGGgG5odNdgkTck8RKANsi4CNrBUXlckl0cHaSkQcMdRTask6oaFDCmpHKb8QUighQf6SCUz24HgUkLrvK1uHT00YDonwxB3');
function App() {
  //create a listener who is sign in .

  const[{},dispatch]=useStateValue();
  useEffect(()=>{
 auth.onAuthStateChanged(authUser=>{
   console.log('The user is>>>>>> ', authUser);

   if(authUser)
   {//if the user loged in or the user was logged in
     dispatch({
       type:'SET_USER',
       user:authUser
     });
   }else{
      dispatch({
        type:'SET_USER',
        user:null
      });
   }
 })
  },[])

  return (
    <Router>
    <div className='app'>
     {/* Amazon Clone */}
     
     <Switch>
     
       <Route path='/login'>
         <Login />
       </Route>
     
       <Route path="/orders">
       <Header />
          <Orders />
       </Route>

       <Route path='/checkout'>
       <Header />
        <Checkout />
       </Route>
       
       <Route path='/payment'>
        <Header />
        <Elements stripe={promise}>
        <Payment />
        </Elements>
       </Route>
     
     <Route path='/'>
     <Header />
      <Home />
     </Route>
   </Switch>
     
     
    </div>
    </Router>
   
    )    
}

export default App;
