import React from 'react';
import './info.css';
import Jersey from './assets/jersey.jpg'
import shahid from './assets/shahid.jpg';
import mrunal from './assets/mrunal.jpg';
import pankaj from './assets/pankaj.jpg';
import shishir from './assets/shishir.jpg';
import logo from './assets/logo.jpg';
import {Link} from "react-router-dom";


export default function jersey(props){
    return(
        <>
    
        <div id="top" class="row">
          <div class="col-11">
            <h1>Jersey</h1>
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

        <div class="m-3 p-3 row">
            <div class="col-3 p-3">
                    <img src={Jersey} alt="Jersey" width="90%"/>                
            </div>

            <div class="col-9 p-3 bg-secondary text-light" style={{borderRadius: 30, overflow:'hidden', opacity: '0.9'}}>
                <h1 class="tw-bold"><u>Jersey</u></h1>
                <br></br>
                <div class="lead">
                A talented but failed cricketer decides to return to cricket in his late thirties driven by the desire to represent the Indian cricket team and fulfil his son's wish for a jersey as a gift.
                <br></br>
                <div class="lead"><p>Cast:</p></div>
                <div class="row m-3 align-items-center justify-contents-center g-2 bg-secondary" style={{opacity:'0.9'}}>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={shahid} alt="Shahid Kapoor" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Shahid_Kapoor" target="_blank"><p>Shahid Kapoor</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={mrunal} alt="Mrunal Thakur" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Mrunal_Thakur" target="_blank"><p>Mrunal Thakur</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={pankaj} alt="Pankaj Kapur" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Pankaj_Kapur" target="_blank"><p>Pankaj Kapur</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={shishir} alt="Shishir Sharma" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Shishir_Sharma" target="_blank"><p>Shishir Sharma</p></a>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="row justify-content-end">
                    <div class="col-2">
                        <a href="https://www.youtube.com/watch?v=BT0zd0kmTxM" id="button" class="btn text-black" target="_blank">
                            Watch Trailer
                        </a>
                    </div>
                    <div class="col-2">
                        <Link to="/bookshowJersey" id="button" class="btn text-black">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div class="bg-secondary m-3 p-3 text-light" style={{borderRadius:30}}>
            <h3>
                Reviews:
            </h3>
            
            <div class="lead">
                <p>
                    This movie hasn't released yet, review not available.
                </p>
            </div>
        </div>
        <img src={logo} width="173px" align="right" alt="logo"></img>
        </>
        
    )
}