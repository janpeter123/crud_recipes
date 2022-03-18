import "../styles/components/categories.css";
import React from "react";
import Container from "@mui/material/Container";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material/";
import { useEffect, useState } from "react";

function Categories() {
  //deve ter 6 categorias.
  const [category, setCategory] = React.useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const get_categories = async () => {
      const res = await fetch("/get_categories", {
        method: "GET",
        mode: "no-cors",
      });

      const parsedResponse = await res.json();
      setCategory(parsedResponse.body);
    };
    get_categories();
  }, [category]);

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
        {category.map((element, i) => {
          return (
            <Container
              className="categories-card"
              key={i}
              id={i}
              sx={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
            url(${element.main_photo})`,
                backgroundSize: "cover",
                backgroundPosition:"center"
              }}
            >
              <h1>{`${element.name}`}</h1>
            </Container>
          );
        })}
      </section>
      <IconButton
        className="scroll-button"
        onClick={() => {
          if (index < category.length) {
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
