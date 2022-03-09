import * as React from "react";
import "../styles/components/recipe_cards.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";

function MediaCard() {
  return (
    <section className="recipe-card-section">
      <Card sx={{ maxWidth: "10rem", marginTop: "2rem", maxHeight:"11rem"}}>
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

      <Card sx={{ maxWidth: "10rem", marginTop: "2rem", maxHeight:"11rem"}}>
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

      <Card sx={{ maxWidth: "10rem", marginTop: "2rem", maxHeight:"11rem"}}>
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
