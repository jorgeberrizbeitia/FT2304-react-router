import logo from "./logo.svg";
import "./App.css";

// App será ahora el componente que organiza mis diferentes paginas

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Timer from "./pages/Timer";
import SideNavbar from "./components/SideNavbar";
import PokeDetails from "./pages/PokeDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SideNavbar />

        <Routes>
          {/* esta es la seccion donde estaran organizados todos los accesos de mi pagina y los componentes que se renderizaran */}

          <Route path="/" element={<Home />} />
          {/* 1. path: A donde quiere ir el cliente */}
          {/* 2. element: El componente que quiere renderizar en ese URL */}

          <Route path="/about" element={<About />} />

          <Route path="/profile/:category/:username" element={<Profile />} />

          <Route path="/timer" element={<Timer />} />

          <Route path="/poke/:pokeName" element={ <PokeDetails /> }/>

          {/* //* rutas de errores */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      footer
    </div>
  );
}

export default App;
