import React, { useEffect, useState } from 'react'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'
import './Plots.css'



const Plotedit = (props) => {
    var[ca,setCa]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:4005/subview")
      .then(response=>{
        console.log(response.data)
        setCa(response.data)

      })
      .catch(err=>console.log(err))
    },[])


    var[inputs,setInputs]=useState(props.data)
    const inputHandler=(event)=>
    {

        const { name, value } =event.target
        setInputs((inputs) => ({ ...inputs,[name]: value }))
        console.log(inputs)
    }
    const addHandler=()=>{
        if(props.method==='put'){

            axios.put("http://localhost:4005/edit/"+inputs._id,inputs)
            .then(response=>{
                console.log("post data"+response.data)
                alert("Success")
                window.location.reload(false)
            })
            .catch(err=>console.log(err))
        }
    }
  return (
    <div>
      <Topbar/>
      <Sidebar/>
      <h2>Edit Products</h2>
    
  
  {/* <FormControl sx={{ m: 1, minWidth: 120 }}> */}
  <TextField label="Plots" name="name" variant="filled" value={inputs.name}onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.name} >{value.name}</MenuItem>
        )
      })
    }
    </TextField> <br /><br />
    <TextField  label="Survay No" type='text' name="Survay_No" variant="filled" value={inputs.Survay_no}onChange={inputHandler}/><br /><br />
    <TextField  label="Price" type='text' name="Price" variant="filled" value={inputs.Price}onChange={inputHandler}/><br /><br />
    <TextField  label="Location" type='text' name="Location" variant="filled" value={inputs.Location}onChange={inputHandler}/><br /><br />
    <TextField  label="Cent/Sqft" type='text' name="Sqft" variant="filled" value={inputs.Sqft}onChange={inputHandler}/><br /><br />
    <Select
   labelId="demo-simple-select-label"
    name='category'value={inputs.category} onChange={inputHandler}>
   <MenuItem value="plots">Plots</MenuItem>
        <MenuItem value="rent rooms">Rent rooms</MenuItem>
        <MenuItem value="others">Others</MenuItem>
  </Select><br /><br />
{/* </FormControl><br/><br/> */}
  <Button variant="contained" onClick={addHandler} >Update</Button>
  </div>
    
  )
}

export default Plotedit