import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import './Plots.css'
import { Home } from '@mui/icons-material';
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';

const Plots = () => {
  var[inputs,setInputs]=useState({
    "name":'',
    "price":'',
    "MRP":'',
    "category":'Plots'
    
  })
  var[selectedimage,setSelectedimage]=useState(null);
  

  const inpuHandler =(event) =>{
    const{name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }

  const savedata=()=>{
    const formdata=new FormData();
    formdata.append('name',inputs.name);
    formdata.append('price',inputs.price);
    formdata.append('MRP',inputs.MRP);
    formdata.append('category',inputs.category);
    formdata.append('image1',selectedimage)
    fetch('http://localhost:3005/new',
    {
        method:'post',
        body:formdata,
    })
    .then((response)=>response.json())
    .then((data)=>{
        alert("record saved")
    })
    .catch((err)=>{
        console.log("error")
    })
}

  //   const addHandler=() =>{
  //     console.log("Clicked")

  //     console.log(inputs)
  //     axios.post("http://localhost:3005/new",inputs)
  //     .then((response)=>{
  //       alert("Record Saved")
  //     })
  //     .catch(err=>console.log(err))
      
  // }

  const handleimage =(event)=>{
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.image1=file;
    }

    


  return (

    <div>
      <Topbar/>
      <Sidebar/>
    <div className="aa">
    <h2> Plots</h2>  
      <TextField label="Survay No" type="text" name="survay no"value={inputs.survayno} onChange={(event) => inpuHandler (event)}/> <br /><br />
      
      <TextField label="Price" type="text" name="price" value={inputs.price} onChange={(event) => inpuHandler (event)}/><br /><br />
      <TextField label="Location" type="text" name="location" value={inputs.location} onChange={(event) => inpuHandler (event)}/> <br /><br />
      <TextField label="Cent" type="text" name="cent" value={inputs.cent} onChange={(event) => inpuHandler (event)}/> <br /><br />

      <Select label="Category" name="category" value={inputs.category}onChange={inpuHandler}>
        <MenuItem value="Plots">Plots</MenuItem>
            <MenuItem value="Rent rooms">Rent rooms</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
      </Select><br /><br />
      <label>Upload file</label>
        <input type="file" onChange={handleimage}></input>
        <br /><br />
      
      <button className="addproduct-btn" onClick={()=>{savedata()}}>ADD</button>
    </div>
    </div>
  )
}

export default Plots