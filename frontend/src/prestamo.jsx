import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function PrestamoApi() {
  const [prestamo, setPrestamo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/prestamoapi/prestamo")
      .then((response) => response.json())
      .then((data) => setPrestamo(data));
  }, []);

  


  return (
    <div>
      <h2>LISTA DE PRESTAM0S</h2>
      <table border="1" className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>usuario_id</th>
            <th>libro_id</th>
            <th>fecha prestamo</th>
            <th>fecha devolucion</th>
            <th>estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {prestamo.map((prestamo) => (
            <tr key={prestamo.id}>
              <td>{prestamo.usuario_id}</td>
              <td>{prestamo.libro_id}</td>
              <td>{prestamo.fecha_prestamo}</td>
              <td>{prestamo.fechadevolucion}</td>
              <td>{prestamo.estado}</td>
              
              <td>
                <Link to={`/actualizar/${prestamo.id}`}>
                  <button className="btn1">Editar</button>
                </Link>
                <button className="btn2">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PrestamoApi;
