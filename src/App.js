import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puzzle_1" />
          <Route path="/puzzle_2" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
