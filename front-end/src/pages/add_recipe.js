// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
  Button,
  FormGroup,
} from "@mui/material";

function AddRecipe() {
  const [descriptionCount, setDescriptionCount] = useState(1);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [description, setDescription] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [recipeCountry, setRecipeCountry] = useState("");
  const [prepareTime, setPrepareTime] = useState("");
  const [prepareTimeUnit, setPrepareTimeUnit] = useState("Minutes");
  const [cookTime, setCookTime] = useState("");
  const [category, setCategory] = useState("6234b6d31eaa1c44e782f1ca");
  const [videoLink, setVideoLink] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function get_recipe() {
      try {
        const res = await fetch(`/get_categories`, {
          method: "GET",
          mode: "no-cors",
        });

        const parsedData = await res.json();
        setCategories(parsedData.body);
      } catch (e) {
        console.log(e);
      }
    }
    get_recipe();
  }, []);
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
    <section className="App">
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
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="surname"
            label="Your Surname"
            variant="outlined"
            size="small"
            sx={{ marginTop: "1rem" }}
            onChange={(event) => setSurname(event.target.value)}
          />

          <TextField
            id="recipe-name"
            label="Recipe Name"
            variant="outlined"
            size="small"
            required
            sx={{ marginTop: "1rem" }}
            onChange={(event) => setRecipeName(event.target.value)}
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
            onChange={(event) => setRecipeCountry(event.target.value)}
          />

          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="prepare-time"
              label="Prepare time"
              variant="outlined"
              size="small"
              required
              sx={{ marginTop: "1rem", width: "9rem" }}
              type="number"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              onChange={(event) => setPrepareTime(event.target.value)}
            />

            <Select
              id="prepare-time-unit"
              value={prepareTimeUnit}
              inputProps={{ "aria-label": "Without label" }}
              sx={{ marginTop: "1rem", width: "9rem" }}
              size="small"
              onChange={(event) => setPrepareTimeUnit(event.target.value)}
            >
              <MenuItem value={"Seconds"}>Seconds</MenuItem>
              <MenuItem value={"Minutes"}>Minutes</MenuItem>
              <MenuItem value={"Hours"}>Hours</MenuItem>
              <MenuItem value={"Days"}>Days</MenuItem>
            </Select>
          </section>

          <Select
            id="food-category"
            value={category}
            // onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
            sx={{ marginTop: "2rem" }}
            fullWidth
            size="small"
            onChange={(event) => setCategory(event.target.value)}
          >
            {
              categories.map((category,i) => {
                return (
                  <MenuItem value={category._id} keu={i}>{category.name}</MenuItem>
                );
              })
            }
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
          <label htmlFor="upload-photo" className="upload-photo">
            upload recipe photo
          </label>

          <p className="ingredients-section">Ingredients</p>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
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
          </section>

          <p className="ingredients-section">Steps</p>
          <section style={{ display: "flex", flexDirection: "column" }}>
            <FormGroup>
              {Array.from(Array(descriptionCount), (e, index) => {
                return (
                  <TextField
                    id={`ingredient-name-${index + 1}`}
                    label={`Step ${index + 1}`}
                    variant="outlined"
                    size="small"
                    sx={{ marginTop: "1rem" }}
                    key={index}
                    fullWidth
                  />
                );
              })}
            </FormGroup>
          </section>
          <section style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={(event) => {
                setDescriptionCount(descriptionCount + 1);
              }}
              style={{
                fontSize: "1rem",
                fontWeight: "800",
                color: "rgba(59, 194, 10,0.8)",
              }}
            >
              +
            </Button>
            <Button
              onClick={(event) => {
                setDescriptionCount(descriptionCount - 1);
              }}
              style={{
                fontSize: "1.4rem",
                fontWeight: "1000",
                color: "rgba(230, 0, 0,0.8)",
              }}
            >
              -
            </Button>
          </section>
        </FormControl>
      </Box>
    </section>
  );
}

export default AddRecipe;
