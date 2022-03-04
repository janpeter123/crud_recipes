import "../styles/App.css";
import React from "react";

import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import MuiAppBar from '@mui/material/AppBar';

function Navbar() {
    const [state,setState] = React.useState(false);

    const toggleDrawer = (open) => (event)=>{
        setState(open)
    }


  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@400;500;600;700;80display=swap');
      </style>

      <nav>
          <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
          <Drawer anchor="left" open={state} onClose={toggleDrawer(false)} sx={{minWidth:"100rem"}}>
              <p>teste</p>
          </Drawer>
        <div>
          <img
            src={require("../styles/icons/cooking_icon.png")}
            width={"30rem"}
            className="crud_logo"
            alt="logo"
          />
        </div>
        <h1 className="title">C.R.U.D Recipes</h1>
      </nav>
    </div>
  );
}

export default Navbar;
