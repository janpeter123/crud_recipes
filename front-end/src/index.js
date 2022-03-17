import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import Recipe from "./pages/recipe";
import AddRecipe from "./pages/add_recipe";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/add_recipe/" element={<AddRecipe />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
