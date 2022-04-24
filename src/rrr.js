import React from 'react';
import './info.css';
import rrr from './assets/rrr.jpg';
import ram from './assets/ram.jpeg';
import ntrao from './assets/ntrao.jpeg';
import alia from './assets/alia.jpeg';
import aj from './assets/aj.jpeg';
import {Link} from "react-router-dom";
import logo from './assets/logo.jpg';


export default function RRR(props){
    return(
        <>
    
        <div id="top" class="row">
          <div class="col-11">
            <h1>RRR</h1>
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
                    <img src={rrr} alt="RRR" width="90%"/>                
            </div>

            <div class="col-9 p-3 bg-secondary text-light" style={{borderRadius: 30, overflow:'hidden', opacity: '0.9'}}>
                <h1 class="tw-bold"><u>RRR</u></h1>
                <br></br>
                <div class="lead">
                A tale of two legendary revolutionaries and their journey far away from home. After their journey they return home to start fighting back against British colonialists in the 1920s.
                <br></br>
                <div class="lead"><p>Cast:</p></div>
                <div class="row m-3 align-items-center justify-contents-center g-2 bg-secondary" style={{opacity:'0.9'}}>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={ram} alt="Ram Charan" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Ram_Charan" target="_blank"><p>Ram Charan</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={ntrao} alt="N. T. Rama Rao Jr" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/N._T._Rama_Rao_Jr." target="_blank"><p>N. T. Rama Rao Jr</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={alia} alt="Alia Bhatt" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Alia_Bhatt" target="_blank"><p>Alia Bhatt</p></a>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card bg-secondary border-10">
                            <div class="card-body text-center p-4">
                                <img src={aj} alt="Ajay Devgn" width='150px' height='250px'/>
                                <a id="cast" href="https://en.wikipedia.org/wiki/Ajay_Devgn" target="_blank"><p>Ajay Devgn</p></a>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="row justify-content-end">
                    <div class="col-2">
                        <a href="https://www.youtube.com/watch?v=f_vbAtFSEc0" id="button" class="btn text-black" target="_blank">
                            Watch Trailer
                        </a>
                    </div>
                    <div class="col-2">
                        <Link to="/bookshowRRR" id="button" class="btn text-black">
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
                RRR is a roaring, rearing, rousing mix of genres — epic-mythological-action-superhero-bromance, that very SS Rajamouli concoction, which we are invited to swallow in one humungous gulp. It is also, needless to say, deafeningly loud. But given that the film compelled me to stay with it, and granted me much fun while at it, I was happy, for once, to sacrifice my ears temporarily. The three hours plus film, a patriotic saga set in British India in the 1920s, proves several things in one go. That, for Indian filmmakers and viewers, there will never be a greater, more durable fount of stories than the Ramayan and the Mahabharat. That, if you want to be really safe, you cast not just one super-star, but two of them. And that if you want big, you go only to Rajamouli, the biggest super-star of them all: the loudest ‘taalis’ were reserved for his blink-and-miss in the final credits.
                </p> </div>
        </div>
        </div>
        <img src={logo} width="173px" align="right" alt="logo"></img>
        </>
    )
}