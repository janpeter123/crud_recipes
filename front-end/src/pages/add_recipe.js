// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import svg from "../styles/svgs/chef.svg";
import "../styles/pages/add_recipe.css";
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";

function AddRecipe() {
  //   useEffect(() => {
  //     async function get_recipe() {
  //       try {
  //         const res = await fetch(`/get_recipe/?id=${id}`, {
  //           method: "GET",
  //           mode: "no-cors",
  //         });

  //         const parsedData = await res.json();
  //         setRecipe(parsedData.body);
  //         console.log(recipe);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }
  //     get_recipe();
  //   }, [recipe,id]);
  const countries = [
    { label: "Brazil" },
    { label: "Germany" },
    { label: "England" },
    { label: "France" },
    { label: "Italy" },
    { label: "Japan" },
    { label: "China" },
    { label: "unknown" },
  ];

  return (
    <div className="App">
      <Navbar />
      <Box sx={{ marginTop: "3.6rem", marginBottom: "10rem" }}>
        <img
          src={svg}
          width={"200rem"}
          alt="drawing of a gril making a sandwich"
        />
        <h3 style={{ fontWeight: "400" }}>Let's start creating!</h3>
        <FormControl>
          <TextField
            id="name"
            label="Your Name"
            variant="outlined"
            size="small"
            required
          />
          <TextField
            id="surname"
            label="Your Surname"
            variant="outlined"
            size="small"
            sx={{ marginTop: "1rem" }}
          />

          <TextField
            id="recipe-name"
            label="Recipe Name"
            variant="outlined"
            size="small"
            required
            sx={{ marginTop: "1rem" }}
          />

          <Autocomplete
            disablePortal
            id="country"
            options={countries}
            sx={{ width: 300, marginTop: "1rem" }}
            size="small"
            renderInput={(params) => (
              <TextField {...params} label="Recipe country" />
            )}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="prepare-time"
              label="Prepare time"
              variant="outlined"
              size="small"
              required
              sx={{ marginTop: "1rem", width: "9rem" }}
              type="number"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />

            <Select
              id="prepare-time-unit"
              value={"Minutes"}
              // onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
              sx={{ marginTop: "1rem", width: "9rem" }}
              size="small"
            >
              <MenuItem value={"Seconds"}>Seconds</MenuItem>
              <MenuItem value={"Minutes"}>Minutes</MenuItem>
              <MenuItem value={"Hours"}>Hours</MenuItem>
              <MenuItem value={"Days"}>Days</MenuItem>
            </Select>
          </div>

          <Select
            id="food-category"
            value={"6234b6d31eaa1c44e782f1ca"}
            // onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
            sx={{ marginTop: "2rem"}}
            fullWidth
            size="small"
          >
            <MenuItem value={"6234b6d31eaa1c44e782f1ca"}>Main Course</MenuItem>
            <MenuItem value={"6234b6d31eaa1c44e782f1cb"}>Starter</MenuItem>
          </Select>
          <TextField
            id="video-link"
            label="Video Link"
            variant="outlined"
            size="small"
            sx={{ marginTop: "1rem" }}
          />

          <input
            type="file"
            id="upload-photo"
            accept="image/png, image/jpeg"
            className="inputfile"
            style={{ marginTop: "1rem" }}
          />
          <label for="upload-photo" className="upload-photo">
            upload recipe photo
          </label>

          <p className="ingredients-section">Ingredients</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="ingredient-name"
              label="Ingredient name"
              variant="outlined"
              size="small"
              sx={{ marginTop: "1rem", width: "6rem" }}
            />

            <TextField
              id="ingredient-name"
              label="qtd"
              variant="outlined"
              size="small"
              type="number"
              sx={{ marginTop: "1rem", width: "6rem" }}
            />
            <Select
              id="ingredient-quantity"
              value={"xicaras"}
              // onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
              sx={{ marginTop: "1rem", width: "6rem" }}
              size="small"
            >
              <MenuItem value={"xicaras"}>xicaras</MenuItem>
              <MenuItem value={"colheres de sopa"}>colheres de sopa</MenuItem>
              <MenuItem value={"colheres de cha"}>colheres de chá</MenuItem>
              <MenuItem value={"colheres de cafe"}>colheres de café</MenuItem>
              <MenuItem value={"gramas"}>gramas</MenuItem>
              <MenuItem value={"quilos"}>quilos</MenuItem>
              <MenuItem value={"pitada"}>pitada</MenuItem>
              <MenuItem value={"dentes"}>dentes</MenuItem>
              <MenuItem value={"unidades"}>unidades</MenuItem>
            </Select>
          </div>

          <p className="ingredients-section">Steps</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="ingredient-name"
              label="Step 1"
              variant="outlined"
              size="small"
              sx={{ marginTop: "1rem" }}
              fullWidth
            />
          </div>
        </FormControl>
      </Box>
    </div>
  );
}

export default AddRecipe;
