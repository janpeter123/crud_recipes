import { useEffect, useState } from "react";
import "../styles/components/recipe_cards.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
// const credentials = require("../credentials/credentials_do_not_share");

function MediaCard() {
  const [catalog, setCatalog] = useState([]);
  const cardContentStyle = {
    display: "flex",
    flexDirection: "row",
    marginY: "0",
  };
  const cardStyle = {
    maxWidth: "10rem",
    marginTop: "2rem",
    maxHeight: "11rem",
    paddingBottom: "1rem",
  };

  useEffect(() => {
    async function get_catalog() {
      try {
        const res = await fetch("/get_catalog", {
          method: "GET",
          mode: "no-cors",
        });

        const parsedData = await res.json();
        setCatalog(parsedData.body);
      } catch (e) {
        console.log(e);
      }
    }

    get_catalog();
  }, []);
  return (
    <section className="recipe-card-section">
      {catalog.map((recipe, i) => {
        return (
          <Card sx={cardStyle} key={i}>
            <Link to={`/recipe/${catalog[i]._id}`} style={{textDecoration:"none"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="90"
                  image={`${recipe.main_photo}`}
                />
                <CardContent sx={cardContentStyle}>
                  <div className="card-left">
                    <h3>{recipe.recipe_name}</h3>
                    <div>
                      <Rating
                        name="simple-controlled"
                        value={4.5}
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="card-right">
                    <AccessTimeIcon />
                    <p>{recipe.prepare_time}</p>
                    <p>{recipe.prepare_time_unit.slice(0, 3)}</p>
                  </div>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        );
      })}
    </section>
  );
}

export default MediaCard;
