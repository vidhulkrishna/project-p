import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Plotedit from './Plotedit';
import './Documents.css'
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';

const Plotdetails = () => {
  var [category, setCategory] = useState([]);
  var [selected, setSelected] = useState();
  var [update, setUpdate] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3005/view")
      .then(response => {
        setCategory(response.data)
      })
      .catch(err => console.log(err))
  }, [])
  const updateValues = (row) => {
    setSelected(row)
    setUpdate(true)
  }
  var result =
    <div className='bb'>
      <Topbar/>
      <Sidebar/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>Survay No</TableCell>
            <TableCell>Price</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Cent/sqft</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.map((row, pos) => {

              return (
                <TableRow
                  key={pos}>
                  <TableCell>
                    {row.id}
                  </TableCell>
                  <TableCell>{row.survayno}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.cent}</TableCell>
                  <TableCell><EditIcon onClick={() => updateValues(row)} /></TableCell>
                  <TableCell>
                       <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`}
                        width="50" height="50" alt="Error"/></TableCell>

                </TableRow>

              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  if (update)
    result = <Plotedit data={selected} method='put' />
  return (result)
}

export default Plotdetails
