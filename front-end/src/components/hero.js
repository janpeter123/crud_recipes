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
import {
  searchBarStyle,
  heroStyle_mobile,
  heroStyle_desktop
} from "../styles/components/heroStyle";
import useMediaQuery from "@mui/material/useMediaQuery";

function Hero() {
  const mobile = useMediaQuery("(max-width:600px)");

  if (mobile) {
    return (
      <Box sx={heroStyle_mobile} id="hero">
        <section className="hero-section-mobile">
          <h1>Cook with ease</h1>
          <FormControl variant="outlined" sx={{ width: "80%" }}>
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
  } else {
    return (
      <Box sx={heroStyle_desktop}>
        <section className="hero-section-desktop">
          <h1>Cook something without stressing yourself</h1>
        </section>
      </Box>
    );
  }
}

export default Hero;
