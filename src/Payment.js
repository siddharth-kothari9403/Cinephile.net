import React from 'react';
import {Link } from "react-router-dom";
import './info.css';
import logo from './assets/logo.jpg';
import cards from './assets/cards.jpg'


export default function(props){
    
    return(
      
        <>
        <div id="top" class="row">
          <div class="col-11">
            <h1>Book Tickets</h1>
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

        <div id="form" class="row text-light">
            <div class="col">
        <form action="" method="post">
            <p>Name*:</p>
            <div>
            <input id="inp" type="text" name="name" required/></div> 

            <p>Contact No*:</p>
            <div>
            <input id="inp" type="text" name="contact" required/></div> 
            
            <div class="row my-5 pe-5">
              <div class="col-2">
            <p>No of seats*:</p>
            </div>
            
            <div class="col-3">
            <div class="btn-group">
            <button type="button" class="btn btn-lg" id="button3" onClick={props.decrement}>-</button> &nbsp; &nbsp;
            {props.noOfSeats} &nbsp; &nbsp;
            <button type="button" class="btn btn-lg" id="button3" onClick={props.increment}>+</button> </div>

            </div>
            <div class="col-3">
              <p>Amount:</p>
            </div>
            <div class="col-2">
              <p id="parapa">{props.noOfSeats*250}</p>
            </div>
            
            </div>

            <h2>
                Payment Information
            </h2>

            <p>Theatre*:</p><p>
                <select id="inp" name="theatre" required>
                <option value="">--Choose the theater--</option>
                <option value="pvr-forum">PVR- The Forum Mall, Koramangala</option>
                <option value="rupay">PVR- Vega City, Bannerghatta Road</option>
                <option value="mastercard">PVR- Aura Park Square</option>
            </select>
            </p>

            <p>Show Time*:</p><p>
                <select id="inp" name="theatre" required>
                <option value="">--Choose show time--</option>
                <option value="pvr-forum">12:30</option>
                <option value="rupay">4:00</option>
                <option value="mastercard">7:30</option>
            </select>
            </p>

            <p>Card Type*:</p><p>
                <select id="inp" name="card_type" required>
                <option value="">--Select a card type--</option>
                <option value="visa">Visa</option>
                <option value="rupay">Rupay</option>
                <option value="mastercard">Mastercard</option>
            </select>
            <img src={cards} align="right" height="100px"></img>
            </p>

            <p>Card number*:</p><p> <input id="inp" type="number" name="card_number" required/></p>
            <p>Expiration date*:</p><p> <input id="inp" type="date" name="exp_date" required/></p>
            <p>CVV*: </p><p><input id="inp" type="password" name="cvv" required/></p>

            <Link id="button" to="/success" class="btn btn-lg text-black justify-content-center">
            <button id="button2" type="submit" name="submit" value="Submit">
                Submit
            </button></Link>


        </form>
        </div>


        </div>
        <img src={logo} width="173px" align="right" alt="logo"></img>
        </>
    );
}