import React from 'react';
import {Link} from "react-router-dom";
import './App.css';
import './info.css'
import logo from "./assets/logo.jpg";

export default function Complaint(){
    return (
        <>
        <div id="top" class="row">
          <div class="col-12">
            <h1>Issue Registered</h1>
          </div>
        </div>

        <div id ="content" class="text-light">
            <p align="center" class="para">
            We deeply regret any inconvenience caused to you.</p>
<p align="center" class="para">Your issue has been registered and will be resolved as soon as possible.</p>
<p align="center" class="para">We thank you for your valuable feedback.</p>
        </div>

        <div class="row justify-content-center align-items-center">
        <Link id="button1" to="/mainpage" class="btn text-black">
            Back To Home
        </Link></div>

        <img src={logo} width="173px" align="right" alt="logo"></img>
        </>
    );
}