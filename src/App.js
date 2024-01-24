import './App.css';
import React, { useEffect, useState } from 'react'
import Topbar from './Components/Adminpanel/Topbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Login from "./components/Login/Login";
import Plots from './Components/Plot/Plots';
import Plotdetails from './Components/Plot/Plotdetails';
import Plotedit from './Components/Plot/Plotedit';
import Documents from './Components/Plot/Documents';
import Documentdetails from './Components/Plot/Documentdetails';
import Home from './Components/Adminpanel/Home';



function App() {
  const [isloggedin,setIsloggedin] =useState(false);

  useEffect(()=>{
  const storevalue =localStorage.getItem("isloggedin");
  if(storevalue==="1")
   {
    setIsloggedin(true); 
  }
  },[])
  
  const Logincheck =() =>{
  localStorage.setItem("isloggedin",'1')
  setIsloggedin(true);
  }
  const Logoutcheck =() =>{
  localStorage.removeItem("isloggedin")
  setIsloggedin(false);
  }

  
  return (
    <div >
      {/* { /*<React.Fragment>
          { !isloggedin && <Topbar checkLogOut={Logoutcheck}/>}
          { isloggedin && <Login checkLogin={Logincheck}/>}
       </React.Fragment> */ } 

     <BrowserRouter>
     <Routes>
      <Route path='/plots' element={<Plots method='POST'/>}></Route>
      <Route path='/plotdetails' element={<Plotdetails method='get'/>}></Route>
      <Route path='/plotedit' element={<Plotedit method='get'/>}></Route>
      <Route path='/documents' element={<Documents method='POST'/>}></Route>
      <Route path='/documentdetails' element={<Documentdetails method='get' />}></Route>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
