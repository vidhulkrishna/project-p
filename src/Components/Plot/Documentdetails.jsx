import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import baseUrl from '../../Api'
import {Buffer} from 'buffer';
import './Details.css'

const Documentdetails = () => {
    var[certdetails,setCertdetails] = useState([]);

    useEffect(()=>{
        axios.get(baseUrl+'/certificate/certview')
        .then(response =>{
           setCertdetails(response.data)
        })
        .catch(err=>console.log(err))
    },[])



  return (
  <div className='aa'>
    <Typography >PLOT DETAILS</Typography><br/><br/>
    <TableContainer>
    <Table >
      <TableHead>
        <TableRow>
          <TableCell >Survay No</TableCell>
          <TableCell >Pid</TableCell>
          <TableCell >Sno</TableCell>
          <TableCell >Photo</TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
          {certdetails.map((value,index)=>{
              return(
                  <TableRow key={index}>
                      <TableCell>{value._id}</TableCell>
                      <TableCell>{value.pid}</TableCell>
                      <TableCell>{value.stud[0].Sno}</TableCell>
                      <TableCell>
                      <img src={`data:image/jpeg;base64,${Buffer.from(value.certphoto.data)}`} width="50" height="50" alt='Error' />   
                      </TableCell>
                  </TableRow>
              )
          })}
      </TableBody>
    </Table>
    </TableContainer>
    </div>
    
    )
}


export default Documentdetails
