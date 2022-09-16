import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./components/Game";
import Leaderboards from "./pages/Leaderboards";
import Footer from "./components/Footer";

import { mapOne, mapTwo } from "./assets/maps";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/waldo/" element={<Home />} />
          <Route path="/waldo/puzzle_1" element={<Game map={mapOne} />} />
          <Route path="/waldo/puzzle_2" element={<Game map={mapTwo} />} />
          <Route path="/waldo/leaderboards" element={<Leaderboards />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
