import "../styles/App.css";
import "../styles/components/nav.css";
import React from "react";

import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import useMediaQuery from "@mui/material/useMediaQuery";

function Navbar() {
  const mobile = useMediaQuery("(max-width:820px)");
  //TODO 
  //Desktop layout

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@400;500;600;700;80display=swap');
      </style>

      <nav>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: "#3fd609", marginRight: "3rem" }} />
        </Button>
        <Drawer
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
          sx={{ minWidth: "100rem" }}
        >
          <List sx={{ width: "100%" }}>
            <ListItem>teste</ListItem>
          </List>
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
