import React from 'react';
import './info.css';
import SOD from './assets/sod.jpg'
import mads from './assets/mads.jpg';
import jude from './assets/jude.jpg';
import eddie from './assets/eddie.jpg';
import kath from './assets/kath.jpg';
import logo from './assets/logo.jpg';
import {Link} from "react-router-dom";


export default function sod(props){
    return(
        <>
    
        <div id="top" class="row">
          <div class="col-11">
            <h1>Fantastic Beasts: The Secrets of Dumbledore</h1>
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
                    <img src={SOD} alt="Fantastic Beasts: The Secrets of Dumbledore" width="90%"/>                
            </div>

            <div class="col-9 p-3 bg-secondary text-light" style={{borderRadius: 30, overflow:'hidden', opacity: '0.9'}}>
                <h1 class="tw-bold"><u>Fantastic Beasts: The Secrets of Dumbledore</u></h1>
                <br></br>
                <div class="lead">
                Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.
                <br></br>
                <div class="lead"><p>Cast:</p></div>
                <div class="row m-3 align-items-center justify-contents-center g-2 bg-secondary" style={{opacity:'0.9'}}>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={mads} alt="Mads Mikkelsen" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Mads_Mikkelsen" target="_blank"><p>Mads Mikkelsen</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={jude} alt="Jude Law" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Jude_Law" target="_blank"><p>Jude Law</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={eddie} alt="Eddie Redmayne" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Eddie_Redmayne" target="_blank"><p>Eddie Redmayne</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={kath} alt="Katherine Waterston" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Katherine_Waterston" target="_blank"><p>Katherine Waterston</p></a>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="row justify-content-end">
                    <div class="col-2">
                        <a href="https://www.youtube.com/watch?v=Fo6TfHkLW6Y" id="button" class="btn text-black" target="_blank">
                            Watch Trailer
                        </a>
                    </div>
                    <div class="col-2">
                        <Link to="/bookshowSOD" id="button" class="btn text-black">
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
                
            ‘Fantastic Beasts: The Secrets of Dumbledore’ Review: The Harry Potter Prequel Series Finally Finds the Magic

After two prior films, the Fantastic Beasts finally finds the right blend of new stories and characters with established lore.
                </div>
        </div>
        </div>
        <img src={logo} width="173px" align="right" alt="logo"></img>
        </>
    )
}