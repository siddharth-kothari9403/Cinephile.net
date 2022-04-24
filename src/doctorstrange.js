import React from 'react';
import './info.css';
import doctorstrange from './assets/doctorstrange.jpg';
import bcumb from './assets/bcumb.jpg';
import eolsen from './assets/eolsen.jpg';
import xgomez from './assets/xgomez.jpeg';
import ce from './assets/ce.jpg';
import logo from './assets/logo.jpg';
import {Link} from "react-router-dom";

export default function DoctorStrange(props){
    return(
        <>
    
        <div id="top" class="row">
          <div class="col-11">
            <h1>Doctor Strange in the Multiverse of Madness</h1>
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
                    <img src={doctorstrange} alt="Doctor Strange" width="90%"/>                
            </div>

            <div class="col-9 p-3 bg-secondary text-light" style={{borderRadius: 30, overflow:'hidden', opacity: '0.9'}}>
                <h1 class="tw-bold"><u>Doctor Strange in the Multiverse of Madness</u></h1>
                <br></br>
                <div class="lead">
                Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.
                </div>
                <br></br>
                <div class="lead"><p>Cast:</p></div>
                <div class="row m-3 align-items-center justify-contents-center g-2 bg-secondary" style={{opacity:'0.9'}}>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={bcumb} alt="Benedict Cumberbatch" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Benedict_Cumberbatch" target="_blank"><p>Benedict Cumberbatch</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={eolsen} alt="Elizabeth Olsen" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Elizabeth_Olsen" target="_blank"><p>Elizabeth Olsen</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={xgomez} alt="Xochitl Gomez" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Xochitl_Gomez" target="_blank"><p>Xochitl Gomez</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={ce} alt="Chiwetel Ejiofor" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Chiwetel_Ejiofor" target="_blank"><p>Chiwetel Ejiofor</p></a>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="row justify-content-end">
                    <div class="col-2">
                        <a href="https://www.youtube.com/watch?v=aWzlQ2N6qqg" id="button" class="btn text-black" target="_blank">
                            Watch Trailer
                        </a>
                    </div>
                    <div class="col-2">
                        <Link to="/bookShowDoctorStrange" id="button" class="btn text-black">
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
                    This movie hasn't released yet, review not available.
                </p>
            </div>
        </div>

        <img src={logo} width="173px" align="right" alt="logo"></img>
        </>
    )
}