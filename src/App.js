import './App.css';
import { Button, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, CardTitle, CardText, Card } from 'reactstrap'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ObtenerPelicula from './ObtenerPelicula';


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
    <div className="body">
      <Router>
        <Route exact path="/" component={ObtenerPeliculareact }></Route>
      </Router>
      <div className="title">
        <h1>RANDOM MOVIES</h1>
        <div>
          <p>¡Deja de discutir con tu pareja por cuál película escoger!</p>
        </div>
      </div>
      <div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Obtener Película</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Lista de Películas</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
