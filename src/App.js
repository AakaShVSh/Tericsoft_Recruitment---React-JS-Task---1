import { LocalizationProvider } from "@mui/x-date-pickers";
import "./App.css";
import EmployessData from "./components/EmployessData";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from "react";
function App() {



  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    {/* <div className="App"> */}
      <EmployessData />
    {/* </div> */}
    </LocalizationProvider>
  );
}

export default App;
