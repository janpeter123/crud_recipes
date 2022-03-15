import { useEffect, useState } from "react";
import "../styles/components/recipe_cards.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
const credentials = require("../credentials/credentials_do_not_share");

function MediaCard() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function get_recipes() {
      try {
        const res = await fetch("/get_recipes", {
          method: "GET",
          mode: "no-cors",
        });

        const parsedData = await res.json();
        setRecipes(parsedData.body);
      } catch (e) {
        console.log(e);
      }
    }

    get_recipes();
  }, []);
  return (
    <section className="recipe-card-section">
      {recipes.map((recipe,i) => {
        return (
          <Card
            sx={{ maxWidth: "10rem", marginTop: "2rem", maxHeight: "11rem",paddingBottom:"1rem" }}
            key={i}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="90"
                image={`${recipe.main_photo}${credentials.FIREBASE_TOKEN}`}
              />
              <CardContent
                sx={{ display: "flex", flexDirection: "row", marginY: "0" }}
              >
                <div className="card-left">
                  <h3>{recipe.recipe_name}</h3>
                  <div>
                    <Rating name="simple-controlled" value={4.3} size="small" />
                  </div>
                </div>
                <div className="card-right">
                  <AccessTimeIcon />
                  <p>{recipe.prepare_time}</p>
                  <p>{recipe.prepare_time_unit.slice(0,3)}</p>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </section>
  );
}

export default MediaCard;
