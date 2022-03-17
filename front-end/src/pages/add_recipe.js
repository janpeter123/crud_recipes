// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";
import svg from "../styles/svgs/chef.svg"

function AddRecipe() {

//   useEffect(() => {
//     async function get_recipe() {
//       try {
//         const res = await fetch(`/get_recipe/?id=${id}`, {
//           method: "GET",
//           mode: "no-cors",
//         });

//         const parsedData = await res.json();
//         setRecipe(parsedData.body);
//         console.log(recipe);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//     get_recipe();
//   }, [recipe,id]);

  return (
    <div className="App">
      <Navbar />
      <Box sx={{ marginTop: "3.6rem" }}>
        <img src={svg} width={"200rem"} alt="drawing of a gril making a sandwich"/>
        
      </Box>
    </div>
  );
}

export default AddRecipe;
