// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import svg from "../styles/svgs/chef.svg";
import "../styles/pages/add_recipe.css";
import {
  TextField,
  Select,
  MenuItem,
  Autocomplete,
  Button,
} from "@mui/material";

function AddRecipe() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [description, setDescription] = useState([{ text: "" }]);
  const [ingredients, setIngredients] = useState([
    { name: "", measurement_unit: "", quantity: "" },
  ]);
  const [recipeName, setRecipeName] = useState("");
  const [recipeCountry, setRecipeCountry] = useState("");
  const [prepareTime, setPrepareTime] = useState("");
  const [prepareTimeUnit, setPrepareTimeUnit] = useState("Minutes");
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

  const ingredients_measurement_units = [
    { value: "xicaras", description: "xicaras" },
    { value: "colheres de sopa", description: "colheres de sopa" },
    { value: "colheres de cha", description: "colheres de chá" },
    { value: "colheres de cafe", description: "colheres de café" },
    { value: "gramas", description: "gramas" },
    { value: "quilos", description: "quilos" },
    { value: "pitada", description: "pitada" },
    { value: "dentes", description: "dentes" },
    { value: "unidades", description: "unidades" },
    { value: "ml", description: "ml" },
    { value: "litros", description: "litros" },
  ];

  const handleDescription = (index, event) => {
    let data = [...description];
    data[index][event.target.name] = event.target.value;
    setDescription(data);
  };

  const handleIngredient = (index, event) => {
    let data = [...ingredients];
    data[index][event.target.name] = event.target.value;
    setIngredients(data);
  };

  const removeIngredients= (index) => {
    let data = [...ingredients];
    data.splice(index, 1);
    setIngredients(data);
  };

  const removeFields = (index) => {
    let data = [...description];
    data.splice(index, 1);
    setDescription(data);
  };

  return (
    <section className="App">
      <Navbar />
      <main
        style={{
          marginTop: "3.6rem",
          marginBottom: "10rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={svg}
          width={"200rem"}
          alt="drawing of a gril making a sandwich"
        />
        <h3 style={{ fontWeight: "400" }}>Let's start creating!</h3>
        <form
          style={{ display: "flex", flexDirection: "column", width: "80%" }}
        >
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
            {categories.map((category, i) => {
              return (
                <MenuItem value={category._id} key={i}>
                  {category.name}
                </MenuItem>
              );
            })}
          </Select>
          <TextField
            id="video-link"
            label="Video Link"
            variant="outlined"
            size="small"
            sx={{ marginTop: "1rem" }}
            onChange={(event) => setVideoLink(event.target.value)}
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
          {/* -------------- Teste ----------------- */}
          {/* -------------- Teste ----------------- */}
          {/* -------------- Teste ----------------- */}
          <p className="ingredients-section">Ingredients</p>
          {ingredients.map((element, index) => {
            return (
              <section
                style={{ display: "flex", justifyContent: "space-between" }}
                key={index}
              >
                <TextField
                  id="ingredient-name"
                  label="Ingredient name"
                  variant="outlined"
                  size="small"
                  name="name"
                  sx={{ marginTop: "1rem", width: "6rem" }}
                  onChange={(event) => handleIngredient(index, event)}

                />

                <TextField
                  id="ingredient-name"
                  label="qtd"
                  variant="outlined"
                  size="small"
                  type="number"
                  sx={{ marginTop: "1rem", width: "6rem" }}
                  name="quantity"
                  onChange={(event) => handleIngredient(index, event)}
                  
                />
                <Select
                  id="ingredient-measurement-unit"
                  value={ingredients[index].measurement_unit}
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{ marginTop: "1rem", width: "6rem" }}
                  size="small"
                  name="measurement_unit"
                  onChange={(event) => handleIngredient(index, event)}
                >
                  {ingredients_measurement_units.map((element, i) => {
                    return (
                      <MenuItem key={i} value={element.value}>
                        {element.description}
                      </MenuItem>
                    );
                  })}
                </Select>
              </section>
            );
          })}

          <section style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={(event) => {
                setIngredients([...ingredients,{ name: "", measurement_unit: "", quantity: "" }]);
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
                removeIngredients(ingredients.length - 1);
              }}
              style={{
                fontSize: "1.4rem",
                fontWeight: "1000",
                color: "rgba(230, 0, 0,0.8)",
              }}
            >
              -
            </Button>
            <Button
              onClick={(event) => {
                console.log(ingredients)
              }}
              style={{
                fontSize: "1.4rem",
                fontWeight: "1000",
                color: "rgba(230, 0, 0,0.8)",
              }}
            >
              TESTE
            </Button>
          </section>

          <p className="ingredients-section">Steps</p>
          <section style={{ display: "flex", flexDirection: "column" }}>
            {description.map((element, index) => {
              return (
                <TextField
                  id={`ingredient-name-${index + 1}`}
                  label={`Step ${index + 1}`}
                  variant="outlined"
                  size="small"
                  name={"text"}
                  sx={{ marginTop: "1rem" }}
                  key={index}
                  onChange={(e) => {
                    handleDescription(index, e);
                  }}
                  fullWidth
                />
              );
            })}
          </section>
          <section style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={(event) => {
                setDescription([...description, { text: "" }]);
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
                removeFields(description.length - 1);
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
        </form>
      </main>
    </section>
  );
}

export default AddRecipe;
