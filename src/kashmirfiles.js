import React from 'react';
import './info.css';
import Kashmirfiles from './assets/kashmirfiles.jpg'
import anup from './assets/anup.jpg';
import mith from './assets/mith.jpg';
import darsh from './assets/darsh.jpg';
import pun from './assets/pun.jpg';
import logo from './assets/logo.jpg';
import {Link} from "react-router-dom";


export default function KashmirFiles(props){
    return(
        <>
    
        <div id="top" class="row">
          <div class="col-11">
            <h1>Kashmir Files</h1>
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
                    <img src={Kashmirfiles} alt="Kashmir Files" width="90%"/>                
            </div>

            <div class="col-9 p-3 bg-secondary text-light" style={{borderRadius: 30, overflow:'hidden', opacity: '0.9'}}>
                <h1 class="tw-bold"><u>Kashmir Files</u></h1>
                <br></br>
                <div class="lead">
                The Kashmir Files is a heart wrenching narrative of the pain, suffering, struggle & trauma of Kashmiri Pandits, seen through the eyes of Krishna, the protagonist. The film questions eye-opening facts about democracy, religion, politics and humanity.
                <br></br>
                <div class="lead"><p>Cast:</p></div>
                <div class="row m-3 align-items-center justify-contents-center g-2 bg-secondary" style={{opacity:'0.9'}}>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={anup} alt="Anupam Kher" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Anupam_Kher" target="_blank"><p>Anupam Kher</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={mith} alt="Mithun Chakraborty" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Mithun_Chakraborty" target="_blank"><p>Mithun Chakraborty</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={darsh} alt="Darshan Kumar" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Darshan_Kumar" target="_blank"><p>Darshan Kumar</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={pun} alt="Puneet Issar" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Puneet_Issar" target="_blank"><p>Puneet Issar</p></a>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="row justify-content-end">
                    <div class="col-2">
                        <a href="https://www.youtube.com/watch?v=A179apttY58" id="button" class="btn text-black" target="_blank">
                            Watch Trailer
                        </a>
                    </div>
                    <div class="col-2">
                        <Link to="/bookshowKashmirFiles" id="button" class="btn text-black">
                            Book Now
                        </Link>
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
                With all its propagandist verve, and cementing the current dispensation’s favoured discourse, it does manage to tap into the grief of the displaced Pandits. What stays with us are the flashes of genuine pain that envelopes Pushkar Nath (Anupam Kher in a credible turn, even if some of his portions are overwrought), damaged and suffering from dementia, but who has never forgotten his beloved Habba Kadal. He is never able to go home again.
                </p></div>
        </div>
        </div>
        <img src={logo} width="173px" align="right" alt="logo"></img>
        </>
    )
}