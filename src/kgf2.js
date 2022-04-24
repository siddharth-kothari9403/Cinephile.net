import React from 'react';
import './info.css';
import kgf from './assets/kgf2.jpeg';
import yash from './assets/yash.jpg';
import srinidhi from './assets/srinidhi.jpeg';
import dutt from './assets/sanjaydutt.jpeg';
import rt from './assets/rt.jpg';
import logo from './assets/logo.jpg';
import {Link} from "react-router-dom";

export default function KGF2(props){
    return(
        <>
    
        <div id="top" class="row">
          <div class="col-11">
            <h1>KGF 2</h1>
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
                    <img src={kgf} alt="Doctor Strange" width="90%"/>                
            </div>

            <div class="col-9 p-3 bg-secondary text-light" style={{borderRadius: 30, overflow:'hidden', opacity: '0.9'}}>
                <h1 class="tw-bold"><u>KGF 2</u></h1>
                <br></br>
                <div class="lead">
                In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order, and Rocky must battle threats from all sides.                </div>
                <br></br>
                <div class="lead"><p>Cast:</p></div>
                <div class="row m-3 align-items-center justify-contents-center g-2 bg-secondary" style={{opacity:'0.9'}}>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={yash} alt="Yash" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Yash_(actor)" target="_blank"><p>Yash</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={srinidhi} alt="Srinidhi Shetty" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Srinidhi_Shetty" target="_blank"><p>Srinidhi Shetty</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={dutt} alt="Sanjay Dutt" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Sanjay_Dutt" target="_blank"><p>Sanjay Dutt</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={rt} alt="Raveena Tandon" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Raveena_Tandon" target="_blank"><p>Raveena Tandon</p></a>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="row justify-content-end">
                    <div class="col-2">
                        <a href="https://www.youtube.com/watch?v=Qah9sSIXJqk" id="button" class="btn text-black" target="_blank">
                            Watch Trailer
                        </a>
                    </div>
                    <div class="col-2">
                        <Link to="/bookshowKGF2" id="button" class="btn text-black">
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
                The trouble with films busy working on their look is that they forget about plotting. The film swings haphazardly between the past, which shows us Rocky’s devotion towards his mother (Archana Jois), and the present, in which he swings between being a saviour and the guy who cracks the whip and roars at the workers to never stop working. Good guy compelled to do bad things by dint of circumstance, or bad guy with a golden heart? Not for us to make too fine a point on that faint distinction because as far as KGF 2 goes, Rocky is no 'gangster' only the 'Master who enters and conquers'.</p>
            </div>
        </div>
        <img src={logo} width="173px" align="right" alt="logo"></img>
        </>
    )
}