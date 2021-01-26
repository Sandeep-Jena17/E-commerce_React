/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const stripe=require("stripe")("sk_test_51IAGGgG5odNdgkTcFkfZPaLHe63G7ge9EzP4u2kr2DTMBIzlJ3j85mymggXeGm817MP7BytoYuemsMufhErRZ2Hn00dnax6XcS");

// eslint-disable-next-line spaced-comment
//api

// app config
const app=express();
// middleware
// eslint-disable-next-line key-spacing
app.use(cors({origin:true}));
app.use(express.json());
// api commands

app.get("/", (request, response)=>response.status(200).send("Hello World"));
app.post("/payments/create", async (request, response)=>{
  const total=request.query.total;
  console.log(`Payment request recieved >>>>>> for this amount  ${total}`);
  const paymentIntent= await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  // Ok created 
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });  

});

// listen commands
exports.api=functions.https.onRequest(app);