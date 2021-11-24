import { useEffect } from "react";
import { Button } from "reactstrap";
import "../src/peliculas.json" 
var datospelis=require('../src/peliculas.json')
console.log(datospelis);
export function ListaPeliculas() {
    // const [pelicula,setPelicula] = setState('');

    function agregarPelicula(){
    }
    return (
    
        <div className="pelicula">
            <div className="container mt-3">
                <Button onClick={agregarPelicula}> 
                 Agregar Pelicula
                </Button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Director</th>
                        <th scope="col">Patrocinador</th>
                    </tr>
                </thead>
                <tbody>
                {/* la función .map realiza un ciclo dentro del array o json al cual se le ejecuta */}
                    {datospelis.map((pelicula)=>{
                    return(
                        <tr>
                    <th scope="row">1</th>
                    <td>{pelicula.Nombre}</td>
                    <td>{pelicula.Director}</td>
                    <td>{pelicula.Patrocinador}</td>
                </tr> 
                    )
                    })}
                
                </tbody>
            </table>
            <div>

            </div>
        </div>
    );
}