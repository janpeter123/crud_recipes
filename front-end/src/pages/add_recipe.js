// import { useParams } from "react-router-dom";
import { useEffect, useState, forwardRef } from "react";
import {useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import firebaseConfig from "../pages/storage_config";
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
  const [isSubmited, setIsSubmited] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [ingredients_measurement_units, setIngredientsMeasurementUnits] =
    useState([]);
  const [countries, setCountries] = useState([]);
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
  const [fileName, setFileName] = useState(null);
  const [open, setOpen] = useState(false);
  const [photoFeedback, setPhotoFeedback] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    async function get_categories() {
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

    async function get_measurement_units() {
      try {
        const res = await fetch(`/get_measurement_units`, {
          method: "GET",
          mode: "no-cors",
        });

        const parsedData = await res.json();
        setIngredientsMeasurementUnits(parsedData.body);
      } catch (e) {
        console.log(e);
      }
    }

    async function get_countires() {
      try {
        const res = await fetch(`/get_countries`, {
          method: "GET",
          mode: "no-cors",
        });

        const parsedData = await res.json();
        setCountries(parsedData.body);
      } catch (e) {
        console.log(e);
      }
    }

    get_categories();
    get_countires();
    get_measurement_units();
  }, []);

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

  const removeIngredients = (index) => {
    let data = [...ingredients];
    data.splice(index, 1);
    setIngredients(data);
  };

  const removeFields = (index) => {
    let data = [...description];
    data.splice(index, 1);
    setDescription(data);
  };

  function videoLinkHelper() {
    if (videoLink.includes("www.youtube.com/watch?v") && isSubmited) {
      return null;
    } else if (!videoLink.includes("www.youtube.com/watch?v") && isSubmited) {
      return "The awaited link format is https://www.youtube.com/watch?v=<video_id>";
    }
  }

  function formValidation() {
    if (
      !name ||
      !surname ||
      !recipeName ||
      !prepareTime ||
      !recipeCountry ||
      !category ||
      !videoLink ||
      !fileName
    ){
      setIsValid(false);
      return false;
    }else {
      setIsValid(true);
      return true;
    }
  }

  const changeHandler = async (event) => {
    setFileName(event.target.files[0].name);
    const firebase = initializeApp(firebaseConfig);
    const storage = getStorage(firebase);
    const storageRef = ref(storage, event.target.files[0].name);
    uploadBytes(storageRef, event.target.files[0]).then((snapshot) => {
      setPhotoFeedback(true);
    });
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    setOpen(true);
    if(formValidation()){
      try {
        const body = {
          author: `${name} ${surname}`,
          recipe_name: recipeName,
          country: recipeCountry,
          prepare_time: prepareTime,
          prepare_time_unit: prepareTimeUnit,
          video_link: videoLink,
          main_photo: `https://firebasestorage.googleapis.com/v0/b/crud-recipes.appspot.com/o/${fileName}?alt=media`,
          ingredients_list: ingredients,
          description: description,
          category: category,
        };
  
        const res = await fetch("/create_recipe", {
          method: "post",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        });
        setIsSubmited(true);
        if (res.status === 201) {
          navigate("/");
        }
      } catch (e) {
        console.log(e);
      }

    }
    
  };

  return (
    <div className="App">
      <Navbar />
      <main
        className="Add-Recipe"
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
            onChange={(event) => setName(event.target.value)}
            error={name.length === 0 && isSubmited}
          />
          <TextField
            id="surname"
            label="Your Surname"
            variant="outlined"
            size="small"
            sx={{ marginTop: "1rem" }}
            onChange={(event) => setSurname(event.target.value)}
            error={surname.length === 0 && isSubmited}
          />

          <TextField
            id="recipe-name"
            label="Recipe Name"
            variant="outlined"
            size="small"
            error={recipeName.length === 0 && isSubmited}
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
            error={recipeCountry.length === 0 && isSubmited}
            onChange={(event, value) => {
              setRecipeCountry(value.label);
            }}
          />

          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="prepare-time"
              label="Prepare time"
              variant="outlined"
              size="small"
              sx={{ marginTop: "1rem", width: "9rem" }}
              type="number"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              onChange={(event) => setPrepareTime(event.target.value)}
              error={!prepareTime && isSubmited}
            />

            <Select
              id="prepare-time-unit"
              value={prepareTimeUnit}
              inputProps={{ "aria-label": "Without label" }}
              sx={{ marginTop: "1rem", width: "9rem" }}
              size="small"
              onChange={(event) => setPrepareTimeUnit(event.target.value)}
              error={prepareTimeUnit.length === 0 && isSubmited}
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
            error={
              videoLink.includes("https://www.youtube.com/watch?v=") ===
                false && isSubmited
            }
            helperText={videoLinkHelper()}
          />

          <input
            type="file"
            id="upload-photo"
            accept="image/png, image/jpeg"
            className="inputfile"
            style={{ marginTop: "1rem" }}
            onChange={(event) => {
              changeHandler(event);
              console.log(fileName);
            }}
            error={!fileName && isSubmited}
          />

          <label htmlFor="upload-photo" className="upload-photo">
            {fileName ? fileName : "Upload photo"}
          </label>
          
          <Snackbar
            sx={{ marginBottom: "1rem", justifyContent: "center" }}
            open={photoFeedback}
            onClose={()=>setPhotoFeedback(false)}  
            autoHideDuration={3000}
          >
            <Alert severity="success">Image uploaded!</Alert>
          </Snackbar>

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
                setIngredients([
                  ...ingredients,
                  { name: "", measurement_unit: "", quantity: "" },
                ]);
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
        <Button
          className="submit"
          onClick={handleSubmit}
          sx={{ fontWeight: "400", color: "#000", width: "80%", mb: "2rem" }}
        >
          Submit
        </Button>
        <Snackbar
          sx={{ marginBottom: "1rem", justifyContent: "center" }}
          open={open && isSubmited}
          onClose={handleClose}
          autoHideDuration={3000}
        >
          <Alert severity="success">Recipe submited!</Alert>
        </Snackbar>
        <Snackbar
          sx={{ marginBottom: "1rem", justifyContent: "center" }}
          open={open && !isValid}
          onClose={handleClose}
          autoHideDuration={3000}
        >
          <Alert severity="error">Please fill the red fields</Alert>
        </Snackbar>
      </main>
    </div>
  );
}

export default AddRecipe;
