import "./styles/App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Categories from "./components/categories";
import MediaCard from "./components/recipe_cards";

function App() {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@400;500;600;700;800');
      </style>
        <Navbar />
      <div className="AppContent">
        <Hero />
        <Categories />
        <MediaCard />
      </div>
    </div>
  );
}

export default App;
