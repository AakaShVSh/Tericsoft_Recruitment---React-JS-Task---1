import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import NewEmployess from './NewEmployess'
import { faker } from '@faker-js/faker';
import { fakedataApi } from '../Refactor/Fakedata/fakedata.action';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const style ={
  textAlign:"left"
}
const hstyle = {
  textAlign:"center",
  marginTop:"3%",
  color:"#01bfbd",
}
const EmployessData = () => {
  const [alldata,setalldata] = useState([])
   const dispatch = useDispatch()
  const [fakedata] = useState({
       Name:faker.name.fullName(),
      Email:faker.internet.email(),
      phone:faker.phone.phoneNumber(),
      dob:faker.date.birthdate(),
      gender:faker.name.sexType(),
      hobbies:faker.animal.bird(),

  })
  const {data} = useSelector((state) => state.fake)
useEffect(() => {
  dispatch(fakedataApi(fakedata))
  setalldata([data])
  
},[])
const getdata = () => {
  axios.get("https://tericsoft-assignment-backend.herokuapp.com/api/employees").then((r) => setalldata([r])).catch((e) => console.log(e))
 
}
console.log(alldata)
  return (
    <>
      <Container style={{marginTop:"2%",borderRadius:"10px",backgroundColor:"#1f4985"}}>
      <Typography sx={hstyle} variant="h4" component="div">
         Employees Data
        </Typography>
        <Box><NewEmployess getdata={getdata} sx={style}/> </Box>
        <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{fontSize:"x-large"}}>
            <TableCell style={{fontSize:"x-large"}}><b>Id no.</b></TableCell>
            <TableCell style={{fontSize:"x-large"}}><b>Name</b></TableCell>
            <TableCell style={{fontSize:"x-large"}}><b>Gender</b></TableCell>
            <TableCell style={{fontSize:"x-large"}}><b>Email</b></TableCell>
            <TableCell style={{fontSize:"x-large"}}><b>Phone</b></TableCell>
            <TableCell style={{fontSize:"x-large"}}><b>Dob</b></TableCell>
            <TableCell style={{fontSize:"x-large"}}><b>Hobbies</b></TableCell>
            <TableCell style={{fontSize:"x-large"}}><b>Edit</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       {/* tabelpart */}
      {alldata !="" ? <>{alldata.map((e,i) => <><TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i+1}
              </TableCell>
              <TableCell align="left">{e.Name}</TableCell>
              <TableCell align="left">{e.Email}</TableCell>
              <TableCell align="left">{e.gender}</TableCell>
              <TableCell align="left">{e.phone}</TableCell>
              <TableCell align="left">{alldata.length==1 ? <>"20/03/2000"</> : e.phone}</TableCell>
              <TableCell align="left">Cricket</TableCell>
              <TableCell align="left"><button>Edit</button></TableCell>
            </TableRow></>)}</>:null}
       
         
      
        </TableBody>
      </Table>
    </TableContainer>
</Container>
    </>
  )
}

export default EmployessData



