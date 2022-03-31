import "../styles/App.css";
import "../styles/components/nav.css";
import React from "react";

import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { searchBarStyle } from "../styles/components/heroStyle";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

function Navbar() {
  const mobile = useMediaQuery("(max-width:900px)");

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  if (mobile) {
    return (
      <div className="App">
        <nav className="nav_mobile">
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "#3fd609" }} />
          </Button>
          <Drawer
            anchor="left"
            open={state}
            onClose={toggleDrawer(false)}
            sx={{ minWidth: "100rem" }}
          >
            <List sx={{ width: "100%" }}>
              <NavLink to="/" className={"NavLink"}>
                <ListItem className="drawer-item">Home</ListItem>
              </NavLink>
              <NavLink to="/add_recipe" className={"NavLink"}>
                <ListItem className="drawer-item">Add Recipe</ListItem>
              </NavLink>
              <NavLink to="/" className={"NavLink"}>
                <ListItem className="drawer-item">Manage</ListItem>
              </NavLink>
              <NavLink to="/" className="LoginButton">
                <Button
                  sx={{
                    color: "#000",
                    background:
                      "linear-gradient(294.3deg, rgba(77, 254, 15, 0.83) 0%, rgba(254, 246, 58, 0.7968) 83.16%)",
                    width:"80%",
                    fontWeight: "600",
                    marginLeft:"1rem"
                  }}
                >
                  Login
                </Button>
              </NavLink>
            </List>
          </Drawer>
          <NavLink
            to="/"
            className="NavLink"
            style={{ display: "flex", paddingTop: "0.5rem" }}
          >
            <div>
              <img
                src={require("../styles/icons/cooking_icon.png")}
                width={"30rem"}
                className="crud_logo"
                alt="logo"
              />
            </div>
            <h1 className="title_mobile">C.R.U.D Recipes</h1>
          </NavLink>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="App">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@400;500;600;700;80display=swap');
        </style>

        <nav className="nav_desktop">
          <NavLink to="/" className="crud_div">
            <img
              src={require("../styles/icons/cooking_icon.png")}
              width={"44rem"}
              className="crud_logo_desktop"
              alt="logo"
            />
            <h1 className="title_desktop">C.R.U.D Recipes</h1>
          </NavLink>
          <FormControl variant="outlined" sx={{ width: "30%" }}>
            <OutlinedInput
              id="searchbar"
              variant="outlined"
              size="small"
              placeholder="Recipes, Ingredients...."
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="search" edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              sx={searchBarStyle}
            />
          </FormControl>
          <NavLink to="/add_recipe" className={"NavLink"}>
            Add Recipe
          </NavLink>
          <NavLink to="/" className="NavLink">
            Manage
          </NavLink>
          <NavLink to="/" className="LoginButton">
            <Button
              sx={{
                color: "#000",
                background:
                  "linear-gradient(294.3deg, rgba(77, 254, 15, 0.83) 0%, rgba(254, 246, 58, 0.7968) 83.16%)",
                borderRadius: "20px",
                fontWeight: "800",
              }}
            >
              Login
            </Button>
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Navbar;
