import "./styles/App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Categories from "./components/categories";

function App() {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@400;500;600;700;800&display=swap');
      </style>

      <Navbar />
      <Hero />
      <Categories />
    </div>
  );
}

export default App;
