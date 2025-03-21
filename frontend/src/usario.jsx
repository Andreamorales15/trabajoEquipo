import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function UsuarioApi() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/usuarioapi/usuario")
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
  }, []);

  return (
    <div>
      <h2>LISTA DE USUARIOS</h2>
      <table border="1" className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>nombre</th>
            <th>correo</th>
            <th>telefono</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.telefono}</td>
              
              <td>
                <Link to={`/actualizar/${usuario.id}`}>
                  <button className="btn1">Editar</button>
                </Link>
                <button onClick={() => (usuario.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsuarioApi;
