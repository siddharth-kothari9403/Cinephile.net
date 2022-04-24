import React from 'react';
import './info.css';
import Beast from './assets/beast.jpg'
import vijay from './assets/vijay.jpg';
import pooja from './assets/pooja.jpg';
import sr from './assets/sr.jpg';
import shine from './assets/shine.jpeg';
import logo from './assets/logo.jpg';
import {Link} from "react-router-dom";


export default function beast(props){
    return(
        <>
    
        <div id="top" class="row">
          <div class="col-11">
            <h1>Beast</h1>
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
                    <img src={Beast} alt="Beast" width="90%"/>                
            </div>

            <div class="col-9 p-3 bg-secondary text-light" style={{borderRadius: 30, overflow:'hidden', opacity: '0.9'}}>
                <h1 class="tw-bold"><u>Beast</u></h1>
                <br></br>
                <div class="lead">
                Beast is a 2022 Indian Tamil-language action comedy film written and directed by Nelson and produced by Sun Pictures. The film stars Vijay and Pooja Hegde, while Selvaraghavan, Shine Tom Chacko, Yogi Babu and Redin Kingsley play supporting roles.
                <br></br>
                <div class="lead"><p>Cast:</p></div>
                <div class="row m-3 align-items-center justify-contents-center g-2 bg-secondary" style={{opacity:'0.9'}}>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={vijay} alt="Vijay" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Vijay_(actor)" target="_blank"><p>Vijay</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={pooja} alt="Pooja Hegde" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Pooja_Hegde" target="_blank"><p>Pooja Hegde</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={sr} alt="Selvaraghavan" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Selvaraghavan" target="_blank"><p>Selvaraghavan</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={shine} alt="Shine Tom Chacko" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Shine_Tom_Chacko" target="_blank"><p>Shine Tom Chacko</p></a>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="row justify-content-end">
                    <div class="col-2">
                        <a href="https://www.youtube.com/watch?v=0E1kVRRi6lk" id="button" class="btn text-black" target="_blank">
                            Watch Trailer
                        </a>
                    </div>
                    <div class="col-2">
                        <Link to="/bookshowBeast" id="button" class="btn text-black">
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
                'Beast' Review: This Nelson-Vijay hostage rescue drama never really takes off

In hostage rescue situations, the big, almost tangible, fear is that innocent people could potentially get killed. It's what negotiators want to avoid; it's what the hero usually works against as well
                </p></div>
        </div>
        </div>

        <img src={logo} width="173px" align="right" alt="logo"></img>
        </>
    )
}