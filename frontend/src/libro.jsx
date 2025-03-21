import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function LibroApi() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4002/libroapi/libro")
      .then((response) => response.json())
      .then((data) => setLibros(data));
  }, []);

  return (
    <div>
      <h2>LISTA LIBROS</h2>
      <table border="1" className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITULO</th>
            <th>AUtor</th>
            <th>año publicado</th>
            <th>stock</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {libros.map((libro) => (
            <tr key={libro.id}>
                <td>{libro.id}</td>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>{libro.aniopublic}</td>
              <td>{libro.stock}</td>
              <td>
                <a>
                  <button className="btn1">Editar</button>
                </a>
                <button className="btn2">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LibroApi;
