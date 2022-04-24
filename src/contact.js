import React from 'react';
import './info.css';
import {Link} from "react-router-dom";
import logo from './assets/logo.jpg';

export default function Contact(){
    return (
        <>
        <div id="top" class="row">
          <div class="col-11">
            <h1>We're here to help you</h1>
          </div>
          <div class="col-1">
            <nav class="navbar navbar-expand-md navbar-light">
            <Link to="/mainpage">
                <span id="back" class="fw-bold">
                    Back to Home                    
                </span></Link>
            
            </nav>
          </div>
        </div>

        <div id ="content" class="text-light">
            <p align="center" class="para">
            We would love to be of assistance to you. Please drop any feedback or complaint that you may have with our services and we will try to revert to you at the earliest.
        </p>
        </div>

        <div id="form" class="row justify-content-center text-light">
            <div class="col">
        <form action="" method="post">
            <p>Name*:</p>
            <div>
            <input id="inp" type="text" name="name" required/></div> 

            <p>Contact No*:</p>
            <div>
            <input id="inp" type="text" name="contact" required/></div> 
            
            <p>Describe the issue*:</p>
            <p> <textarea id="inp" name="address" cols="100" rows="8" required></textarea></p>

            <Link id="button" to="/complaint" class="btn btn-lg text-black justify-content-center">
            <input id="button2" type="submit" name="submit" value="Submit">
                
            </input></Link>

        </form>
        </div>
        </div>

        

        <img src={logo} width="173px" align="right" alt="logo"></img>
        </>
    );
}