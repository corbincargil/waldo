import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./components/Game";
import Footer from "./components/Footer";

import { mapOne, mapTwo } from "./assets/maps";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puzzle_1" element={<Game map={mapOne} />} />
          <Route path="/puzzle_2" element={<Game map={mapTwo} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
