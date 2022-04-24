import React from 'react';
import {Link} from "react-router-dom";
import './App.css';
import './info.css'
import logo from "./assets/logo.jpg";

export default function Success(){
    return (
        <>
        <div id="top" class="row">
          <div class="col-12">
            <h1>Booking Successful</h1>
          </div>
          
        </div>

        <div id ="content" class="text-light">
            <p align="center" class="para">
        Your booking is successful, you should receive a confirmation SMS on your registered mobile number for the same.</p>
<p align="center" class="para">Thankyou for using Cinephile.</p>
<p align="center" class="para">It was an honour to serve you.</p>
        </div>

        <div class="row justify-content-center align-items-center">
        <Link id="button" to="/mainpage" class="btn text-black">
            Back To Home
        </Link></div>

        <img src={logo} width="173px" align="right" alt="logo"></img>
        </>
    );
}