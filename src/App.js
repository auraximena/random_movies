import './App.css';
import { Nav, NavItem, NavLink } from 'reactstrap'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ObtenerPelicula from './ObtenerPelicula';
import { ListaPeliculas } from './ListaPeliculas';
import Home from './Home';

function App() {
  // const [nombre, cambiarNombre] = useState("");

  // const onCLickBoton = function (valor){
  //   debugger;
  //   cambiarNombre({nombre: valor})
  //   alert("Eres el amor de mi vida "+ nombre)
  // }

  // const obtenerNombre = function(valor){
  //   cambiarNombre(valor.target.value)


  return (
    // éste es el título de la página
    //router para dirigir a otras vistas
    <Router>  

      <div className="body">

        <div className="title">
          <h1>RANDOM MOVIES</h1>
          <div>
            <p>¡Deja de discutir por cuál película escoger!</p>
          </div>
          <div className="container mt-5">
            <div className="btn-group">
              <Link to="/" className="btn btn-dark">Home</Link>
              <Link to="/ObtenerPelicula" className="btn btn-dark">Obtener Película</Link>
              <Link to="/ListaPeliculas" className="btn btn-dark">Lista de Películas</Link>
            </div>
            
          </div>
        </div>
        <hr/>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/ObtenerPelicula">
              <ObtenerPelicula />
            </Route>
            <Route path="/ListaPeliculas">
              <ListaPeliculas />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
