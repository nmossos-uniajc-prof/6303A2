import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import ListMovies from "./components/ListMovies";
import NewMovies from "./components/NewMovies";
import EditMovies from "./components/EditMovies";

function App() {

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-md bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Grupo 6303A2</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/about">Acerca de</a>
              <a className="nav-link" href="/list-movies">Peliculas</a>
            </div>
          </div>
        </div>
      </nav>


      <h1>Grupo 6303A2</h1>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/list-movies' element={<ListMovies />} />
        <Route path='/new-movies' element={<NewMovies />} />
        <Route path='/edit-movies/:id' element={<EditMovies />} />
      </Routes>

      <h3>Todos los derechos reservados.</h3>
    </BrowserRouter>
  )
}

export default App
