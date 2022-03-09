import "../styles/components/categories.css";
import React from "react";
import Container from "@mui/material/Container";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material/";

function Categories() {
  //deve ter 6 categorias.
  const list = [1, 2, 3, 4, 5, 6];
  const [index, setIndex] = React.useState(1);

  return (
    <section className="teste">
      <IconButton
        className="scroll-button"
        onClick={() => {
          if (index > 1) {
            setIndex(index - 1);
          }
        }}
      >
        <a href={`#${index}`}>
          <KeyboardArrowLeftIcon />
        </a>
      </IconButton>
      <section className="categories-section">
        {list.map((element) => {
          return (
            <Container
              className="catecories-card"
              id={element}
              key={element}
              sx={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
            url(/assets/pizza.png)`,
                backgroundSize: "cover",
              }}
            >
              <h1>{`teste ${element}`}</h1>
            </Container>
          );
        })}
      </section>
      <IconButton
        className="scroll-button"
        onClick={() => {
          if (index < list.length) {
            setIndex(index + 1);
          }
        }}
      >
        <a href={`#${index}`}>
          <KeyboardArrowRightIcon />
        </a>
      </IconButton>
    </section>
  );
}

export default Categories;
