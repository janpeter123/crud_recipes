import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";

function Recipe() {
  const [recipe, setRecipe] = useState([]);
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
        console.log(recipe);
      } catch (e) {
        console.log(e);
      }
    }
    get_recipe();
  }, [recipe,id]);

  return (
    <div className="App">
      <Navbar />
      <Box sx={{ marginTop: "3.6rem" }}>
        <iframe
          width="100%"
          height="440rem"
          src={recipe.video_link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
          allowfullscreen
        ></iframe>
        <p>Autor:</p>
        <p>{recipe.author}</p>
        
      </Box>
    </div>
  );
}

export default Recipe;
