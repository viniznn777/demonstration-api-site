import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home/Home";
import Armas from "./components/pages/Guns/Armas";
import Mapas from "./components/pages/Maps/Mapas";
import Personagens from "./components/pages/Characters/Personagens";
import Footer from "./components/layout/Footer";
import NewsButton from "./components/Utilities/NewsButton";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/guns" element={<Armas />}></Route>
          <Route exact path="/maps" element={<Mapas />}></Route>
          <Route exact path="/characters" element={<Personagens />}></Route>
        </Routes>
        <NewsButton content="Novidades" />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
