import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "@mui/material";
import "../styles/pages/recipe.css";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import PublicIcon from '@mui/icons-material/Public';
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";

function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState([]);
  const [reviews, setReviews] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    async function get_recipe() {
      try {
        const res = await fetch(`/get_recipe/?id=${id}`, {
          method: "GET",
          mode: "no-cors",
        });

        const parsedData = await res.json();
        setRecipe(parsedData.body);
        setIngredients(parsedData.body.ingredients_list);
        setDescription(parsedData.body.description);
        setReviews(parsedData.body.reviews);
      } catch (e) {
        console.log(e);
      }
    }
    get_recipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function updateReview(value, counter) {
    try {
      const res = await fetch(`/update_recipe/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          new_review: value,
          new_review_count: counter,
        }),
      });

      if (res.status === 200) {
        console.log("Atualizado!");
      }
    } catch (e) {
      console.log(e);
    }
  }

  const mobile = useMediaQuery("(max-width:900px)");

  const container_style = {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    margin: 0,
    borderBottom: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "rgba(0,0,0,0.2)",
  };

  const page_style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    padding: 0,
  };

  const title_with_icon_style = {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    textAlign: "start",
    whiteSpace: "pre-line",
  };

  if (!mobile) {
    return (
      <div className="App">
        <Navbar />
        <iframe
          src={recipe.video_link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
          className="iframe_recipe"
        ></iframe>
        <Container sx={page_style}>
          <section className="about">
            <h5 className="header">Rating</h5>

            <h5 className="header">Reviews</h5>
            <div style={{display:"flex", alignItems: "flex-end"}}>
              <AccessTimeRoundedIcon className="icon" />
              <h5 className="header">Prepare Time</h5>
            </div>

            <div style={{display:"flex", alignItems: "flex-end"}}>
              <PublicIcon className="icon" />
              <h5 className="header">Country</h5>
            </div>

            <Rating
              name="simple-controlled"
              value={reviews}
              onChange={(event, newValue) => {
                newValue = Math.round((newValue + reviews) / 2);
                let review_count = recipe.review_count + 1;
                setReviews(newValue);
                updateReview(newValue, review_count);
              }}
            />

            <h5 className="secondary_info">{recipe.review_count}</h5>

            <h5 className="secondary_info">{`\n${recipe.prepare_time} ${recipe.prepare_time_unit}`}</h5>
            <div className="infos">
              <h5 className="secondary_info">{recipe.country}</h5>
            </div>
          </section>

          <div className="about2">
            <h5 className="header2">Data de envio:</h5>
            <h5 className="header2">{recipe.date}</h5>
          </div>

          <h5 className="recipe_submited_by">
            Receita enviada por: {recipe.author}
          </h5>
          <h3 className="recipe_name">{recipe.recipe_name}</h3>
          <section className="infos">
            <Container sx={container_style}>
              <RestaurantRoundedIcon className="icon" />
              <h4>Ingredientes:</h4>
            </Container>
            <ul className="unordered-list-recipe">
              {ingredients.map((ingredient, index) => {
                return (
                  <li
                    key={index}
                    className="list-item-recipe"
                  >{`${ingredient.quantity} ${ingredient.measurement_unit} de ${ingredient.name}`}</li>
                );
              })}
            </ul>

            <Container sx={container_style}>
              <BakeryDiningIcon className="icon" />
              <h4> Modo de preparo:</h4>
            </Container>
            <ol className="unordered-list-recipe">
              {description.map((element, index) => {
                return (
                  <li key={index} className="ordered-list-item-recipe">
                    {element.text}
                  </li>
                );
              })}
            </ol>
          </section>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        <iframe
          width="100%"
          height="440rem"
          src={recipe.video_link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
          className="iframe_recipe"
        ></iframe>
        <Container sx={page_style}>
          <div className="about">
            <StarIcon className="star-icon" />
            <h5 className="header">{reviews}</h5>
            <h5 className="header">Avaliações:</h5>
            <h5 className="header">{recipe.review_count}</h5>

            <h5 className="header">País:</h5>
            <h5 className="header">{recipe.country}</h5>
          </div>

          <div className="about2">
            <h5 className="header2">Data de envio:</h5>
            <h5 className="header2">{recipe.date}</h5>
          </div>

          <h5 className="recipe_submited_by">
            Receita enviada por: {recipe.author}
          </h5>
          <h3 className="recipe_name">{recipe.recipe_name}</h3>
          <section className="infos">
            <Container sx={title_with_icon_style}>
              <AccessTimeRoundedIcon className="icon" />
              <h4>
                Tempo de preparo :{" "}
                {`\n${recipe.prepare_time} ${recipe.prepare_time_unit}`}{" "}
              </h4>
            </Container>

            <Container sx={container_style}>
              <RestaurantRoundedIcon className="icon" />
              <h4>Ingredientes:</h4>
            </Container>
            <ul className="unordered-list-recipe">
              {ingredients.map((ingredient, index) => {
                return (
                  <li
                    key={index}
                    className="list-item-recipe"
                  >{`${ingredient.quantity} ${ingredient.measurement_unit} de ${ingredient.name}`}</li>
                );
              })}
            </ul>

            <Container sx={container_style}>
              <BakeryDiningIcon className="icon" />
              <h4> Modo de preparo:</h4>
            </Container>
            <ol className="unordered-list-recipe">
              {description.map((element, index) => {
                return (
                  <li key={index} className="ordered-list-item-recipe">
                    {element.text}
                  </li>
                );
              })}
            </ol>
          </section>
        </Container>
      </div>
    );
  }
}

export default Recipe;
