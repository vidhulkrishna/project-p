import { Button,TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import baseUrl from '../../Api'
import './Documents.css'
import { useNavigate } from 'react-router-dom';
import Plots from './Plots';

const Documents = () => {

    var [inputs,setInputs]=useState({"pid":'',"documents":''})
    var [students,setStudents] = useState([]);
    var [selectedimage,setSelectedimage] = useState(null);
   
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(baseUrl+"/plots/pdetails")
        .then(response =>{
            console.log(response.data)
            setStudents(response.data)
        })
        .catch(err=>console.log(err))
    },[])


    const inputhandler =(event)=> {
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }

    const handleimage =(event)=>{
        const file = event.target.files[0];
        setSelectedimage(file)
        inputs.certphoto=file;
    }

    const savedata =()=>{
        const formdata = new FormData();
        formdata.append('pid',inputs.pid);
        formdata.append('documents',inputs.documents);
        formdata.append('plotphoto',selectedimage)

        fetch(baseUrl+'/documents/docnew',
        {method:'post',body:formdata,})
        .then((response)=>response.json())
        .then((data)=>{
            alert("record saved")
        })
        .catch((err)=>{
           console.log("error")
        })
        navigate('/documentdetails')
    }



  return (
    <div className='bb'>
     Survayno: 
    <select name="pid" value={inputs.pid} onChange={inputhandler}  >
        {
            Plots.map((value,index)=>{
                return(
                    <option key={index} value={value._id}>{value.Sno}</option>
                )


            })
        }
    </select>
    <br/><br/>
    Documents:
    <TextField  variant="filled" name="documents" value={inputs.documents}  onChange={inputhandler} />
    <br/><br/><br/>
    CERTIFICATE <input type="file" onChange={handleimage}/>
    <br/><br/><br/>
    <Button variant="outlined" onClick={savedata}>SUBMIT</Button>

    </div>
  )
}

export default Documents
