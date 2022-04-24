import './App.css';

import {Routes, Route, useNavigate} from "react-router-dom";
import {useState} from "react";

import DoctorStrange from './doctorstrange';
import RRR from './rrr';
import KGF2 from './kgf2';
import Beast from './beast';
import KashmirFiles from './kashmirfiles';
import SOD from './sod';
import Jersey from './jersey';

import Contact from './contact';
import MainPage from './MainPage';
import Payment from './Payment';
import Success from './success';
import Complaint from './complaint';

function App() {
  const [noOfSeats, setSeats]=useState(0);
  const[movieName, setMovieName] = useState("Doctor Strange");

  function increment(){
    setSeats(noOfSeats+1);
  }

  function decrement(){
    if (noOfSeats>0){
      setSeats(noOfSeats-1);
    }
  }

  function movieDoctorStrange(){
    setMovieName("Doctor Strange")
  }

  function movieRRR(){
    setMovieName("RRR")
  }

  function movieKGF2(){
    setMovieName("KGF2")
  }

  function movieBeast(){
    setMovieName("Beast")
  }

  function movieSOD(){
    setMovieName("Secrets of Dumbledore")
  }

  function movieKashmirFiles(){
    setMovieName("Kashmir Files")
  }

  function movieJersey(){
    setMovieName("Jersey")
  }
  

  const navigate= useNavigate();
  function Navigator(position){
    navigate(position)
  }

  return (
    

      <Routes>

        <Route exact path="/" element={<MainPage navigateToPage={Navigator} movieVariable={movieName} noOfSeats={noOfSeats} increment={increment} decrement={decrement} movieDoctorStrange={movieDoctorStrange} movieRRR={movieRRR} movieKGF2={movieKGF2} movieBeast={movieBeast} movieKashmirFiles={movieKashmirFiles} movieSOD={movieSOD} movieJersey={movieJersey}/>}></Route>
        <Route exact path="/doctorstrange" element={<DoctorStrange navigateToPage={Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/bookshowDoctorStrange" element={<Payment navigateToPage= {Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/RRR" element={<RRR navigateToPage={Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/bookshowRRR" element={<Payment navigateToPage= {Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/KGF2" element={<KGF2 navigateToPage={Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/bookshowKGF2" element={<Payment navigateToPage= {Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/beast" element={<Beast navigateToPage={Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/bookshowBeast" element={<Payment navigateToPage= {Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/kashmirfiles" element={<KashmirFiles navigateToPage={Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/bookshowKashmirFiles" element={<Payment navigateToPage= {Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/SOD" element={<SOD navigateToPage={Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/bookshowSOD" element={<Payment navigateToPage= {Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/jersey" element={<Jersey navigateToPage={Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats} />}></Route>
        <Route exact path="/bookshowJersey" element={<Payment navigateToPage= {Navigator} movieVariable={movieName} increment={increment} decrement={decrement} noOfSeats={noOfSeats}/>}></Route>

        <Route exact path="/contact" element={<Contact navigateToPage= {Navigator} movieVariable={movieName} />}></Route>
        <Route exact path="/mainpage" element={<MainPage navigateToPage={Navigator} />}></Route>
        <Route exact path="/success" element={<Success navigateToPage={Navigator} />}></Route>
        <Route exact path="/complaint" element={<Complaint navigateToPage={Navigator} />}></Route>

      </Routes>
  );
}

export default App;
