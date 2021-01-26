import React, { useState } from 'react';
import './Login.css';
import {Link,useHistory } from 'react-router-dom';
import { auth } from '../../Firebase';
import MilkWay from "../video/bg-vdo1.mp4"
const Login=()=>{
   const history=useHistory();
   const [email,setEmail]=useState('');
   const[password,setPassword]=useState('');

   const signIn=e=>{
       e.preventDefault();
       //some firebaseShit
       auth.signInWithEmailAndPassword(email,password)
       .then((auth)=>{
           history.push('/')
       }).catch(error=>alert(error.message));

   }
   const register=e=>{
       e.preventDefault();

       //some firebase Shit.....
       auth.createUserWithEmailAndPassword(email,password)
       .then((auth)=>{
           if(auth)
         history.push('/');   
        //console.log(auth);
       }).catch(error=>alert(error.message));
   }
    return(
        <div className='login'>
            <video autoPlay
                  loop
                  muted className="login__video"
                  >
                <source src={MilkWay} type="video/mp4"/>
            </video>
            <Link to='/'>
            <img  className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="amazon_Logo"/>
            </Link>
            <div className="login__container">
               
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text"  value={email} onChange={e=>setEmail(e.target.value)}/>
                    
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <button className="login__signInButton"  type="submit" onClick={signIn}> Sign-in</button>
                </form>
                
                <p> By Signing-in you agree to Amazon condition of use and Sales.
                    please see our Privacy policy and Cookies notice and our intrest-based Ads NOTICE.</p>
              <button className="login__registerButton" onClick={register}>Create your Amazon account.</button>
            
            </div>

          
        </div>
        
    )
}
export default Login;