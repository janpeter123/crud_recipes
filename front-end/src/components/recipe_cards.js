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
        const res = await fetch(credentials.BACK_END_URL + "/get_recipes", {
          method: "GET",
          mode: "no-cors",
        }).then((data) => {
          setRecipes(data)
          console.log(data)
          return data;
        });
      } catch (e) {
        console.log(e);
      }
    }

    get_recipes();
  }, []);
  return (
    <section className="recipe-card-section">
      <Card sx={{ maxWidth: "10rem", marginTop: "2rem", maxHeight: "11rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="90"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent
            sx={{ display: "flex", flexDirection: "row", marginY: "0" }}
          >
            <div className="card-left">
              <h3>Bife a role</h3>
              <div>
                <Rating name="simple-controlled" value={4.3} size="small" />
              </div>
            </div>
            <div className="card-right">
              <AccessTimeIcon />
              <p>45</p>
              <p>min</p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: "10rem", marginTop: "2rem", maxHeight: "11rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="90"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent
            sx={{ display: "flex", flexDirection: "row", marginY: "0" }}
          >
            <div className="card-left">
              <h3>Bife a role</h3>
              <div>
                <Rating name="simple-controlled" value={4.3} size="small" />
              </div>
            </div>
            <div className="card-right">
              <AccessTimeIcon />
              <p>45</p>
              <p>min</p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: "10rem", marginTop: "2rem", maxHeight: "11rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="90"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent
            sx={{ display: "flex", flexDirection: "row", marginY: "0" }}
          >
            <div className="card-left">
              <h3>Bife a role</h3>
              <div>
                <Rating name="simple-controlled" value={4.3} size="small" />
              </div>
            </div>
            <div className="card-right">
              <AccessTimeIcon />
              <p>45</p>
              <p>min</p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </section>
  );
}

export default MediaCard;
