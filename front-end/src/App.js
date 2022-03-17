import "./styles/App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Categories from "./components/categories";
import MediaCard from "./components/recipe_cards";

function App() {
  return (
    <div className="App">
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
