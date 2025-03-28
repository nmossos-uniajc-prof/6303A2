import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Tarjeta from "./Tarjeta"
import About from "./components/About";
import Teams from "./components/Teams";

function App() {
  return (
    <>
      <BrowserRouter>

        <nav className="navbar navbar-expand-md bg-dark border-bottom border-body"  data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" aria-current="page" to="/">Equipo</Link>
                <Link className="nav-link" to="/about">A cerca de</Link>
                <Link className="nav-link" to="/tarjeta">Tarjeta</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Teams />} />
          <Route path="/about" element={<About />} />
          <Route path="/tarjeta" element={<Tarjeta nombre="Pera" tipo="Fruta" precio="1000" />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
