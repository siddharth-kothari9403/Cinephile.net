import React from 'react'
import beast from './assets/beast.jpg';
import doctorstrange from './assets/doctorstrange.jpg';
import rrr from './assets/rrr.jpg';
import kgf from './assets/kgf2.jpeg';
import sod from './assets/sod.jpg';
import kashmirfiles from './assets/kashmirfiles.jpg';
import jersey from './assets/jersey.jpg';
import logo from './assets/logo.jpg';
import {Link} from "react-router-dom";

import "./info.css";

export default function (props) {
  return (
    <>
      
        <div id="top" class="row">
          <div class="col-11">
            <h1>Cinephile.net</h1>
          </div>
          <div class="col-1">
            <nav class="navbar navbar-expand-md navbar-light">
            <Link id="back" to="/contact">
                <span class="fw-bold">
                    Contact Us                    
                </span></Link>
            
            </nav>
          </div>
        </div>
      
      <div class="m-5">
        <h2 id="heading">Movies</h2>
        <div class="row">
            <div class="col-3 p-3">
                <Link to="/doctorstrange" onClick={props.movieDoctorStrange}> 
                <img src={doctorstrange} alt="Doctor Strange" width="90%"/></Link>
            </div>
            <div class="col-3 p-3">
            <Link to="/KGF2" onClick={props.movieKGF2}> 
                <img src={kgf} alt="KGF 2" width="90%"/></Link>
                
            </div>
            <div class="col-3 p-3"> 
            <Link to="/RRR" onClick={props.movieRRR}>
              <img src={rrr} alt="RRR" width="90%"/></Link>
            </div>
            <div class="col-3 p-3"> 
            <Link to="/kashmirfiles" onClick={props.movieKashmirFiles}> 
              <img src={kashmirfiles} alt="Kashmir Files" width="90%"/></Link>
            </div>
            
        </div>
      </div> 

      <div class="m-5">
        <div class="row justify-content-center">
            <div class="col-3 p-3"> 
            <Link to="/jersey" onClick={props.movieJersey}> 
                <img src={jersey} alt="Jersey" width="90%"/></Link>
            </div>
            <div class="col-3 p-3"> 
            <Link to="/beast" onClick={props.movieBeast}> 
                <img src={beast} alt="Beast" width="90%"/></Link>
            </div>
            <div class="col-3 p-3"> 
            <Link to="/SOD" onClick={props.SOD}> 
              <img src={sod} alt="Secrets of Dumbledore" width="90%"/></Link>
            </div>
            
        </div>
      </div> 

      <img src={logo} width="173px" align="right" alt="logo"></img>
      </>
  )
}
