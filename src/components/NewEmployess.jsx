import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius:"20px",
  boxShadow: 24,
  p: 4,
};
const btnstyle = {
  margin:"2%",
  fontSize:"20px",
  bgcolor:"#ffc3ac",
  
}
const NewEmployess = ({getdata}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectdate, setselecteddate] = useState(null);
  const [toadd,setadd] = useState({
      Name:"",
      Email:"",
      phone:"",
      gender:"",
      dob:"",
  })

  const handledata = () => {
    axios.post("https://tericsoft-assignment-backend.herokuapp.com/api/employees",toadd).catch((e) => console.log(e))
   getdata()
  }
  return (
    <>
      <Button sx={btnstyle} onClick={handleOpen}> + Add New Employee</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <FormControl>
              <FormGroup
                style={{
                  gap: "30px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                }}
              >
                <Input
                  placeholder="Name"
                  type="text"
                  id="my-input"
                  aria-describedby="my-helper-text"
                  onChange={(e) => setadd({...toadd,Name:e.target.value})}
                />

                <Input
                  placeholder="Email"
                  type="email"
                  id="my-input"
                  aria-describedby="my-helper-text"
                  onChange={(e) => setadd({...toadd,Email:e.target.value})}

                />
                <Input
                  placeholder="Phone"
                  type="Number"
                  id="my-input"
                  aria-describedby="my-helper-text"
                  onChange={(e) => setadd({...toadd,phone:e.target.value})}

                />
                <DatePicker
                  label="Date of Birth"
                  renderInput={(params) => <TextField {...params} />}
                  value={selectdate}
                  onChange={(newvalue) => {
                    setselecteddate(newvalue);
                    setadd({...toadd,dob:selectdate})
                  }}
                />
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  onChange={(e) => setadd({...toadd,gender:e.target.value})}
                    
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
                <FormGroup>
                  <FormLabel>Select Hobbies</FormLabel>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Cricket"
                  />
                </FormGroup>
                <Button onClick={(e) => handledata(e)} variant="contained">Submit</Button>
              </FormGroup>
            </FormControl>
         
        </Box>
      </Modal>
    </>
  );
};

export default NewEmployess;
