import "../styles/App.css";
import "../styles/components/hero.css";
import Box from "@mui/material/Box";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { searchBarStyle, heroStyle } from "../styles/components/heroStyle";
import useMediaQuery from "@mui/material/useMediaQuery";

function Hero() {
  const mobile = useMediaQuery("(max-width:820px)");
  //TODO desktop layout

  if (mobile) {
    return (
      <Box sx={heroStyle}>
        <section className="hero-section">
          <h1>Cook with ease</h1>
          <FormControl variant="outlined" sx={{ width:"80%" }}>
            <OutlinedInput
              id="searchbar"
              variant="outlined"
              size="small"
              placeholder="Recipes, Ingredien..."
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
        </section>
      </Box>
    );
  }else{
    return(<h1>Desktop Version</h1>);
  }
}

export default Hero;
