import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Elements } from "@stripe";


import "../../styles/home.css";

const Public_Key = ""

const StripeTest = loadStripe(Public_Key)





export default function stripe () {
    return(
        
    <Elements stripe = {stripeTest} >
        <Paymentform/>
    </Elements>
    )


}

