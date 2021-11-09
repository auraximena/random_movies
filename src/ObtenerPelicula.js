export default function ObtenerPelicula() {
  return (
    <div className="pelicula">
      <div className="titulo-pelicula">Maligno</div>
      <img className="img-pelicula" alt="peliculaimg"></img>
    </div>
  );
  // const [nombre, setNombre] = useState("");
  // const onCLickBoton = function (valor){
  //   setNombre({nombre: valor})
  //   alert("Eres el amor de mi vida "+ nombre)
  // }

  // const obtenerNombre = function(valor){
  //   setNombre(valor.target.value)
  // }

  // return (
  //   <div className="App">
  //     <h1>MI PRIMERA APLICACIÓN</h1>
  //     <label>Ingresa tu nombre:</label><br/>
  //     <input type="text" value={nombre} onChange={obtenerNombre}></input><br/>
  //     <Button onClick={onCLickBoton}>Click!</Button>
  //     {/* <div>
  //       Nombre: {nombre}
  //     </div> */}
  //   </div>
  // );

}