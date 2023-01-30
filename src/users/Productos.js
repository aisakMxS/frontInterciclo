import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("nombre", nombre);
    formData.append("cantidad", cantidad);
    formData.append("precio", precio);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/crearproducto",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <center>
      <h1>Ingreso de Productos</h1>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          <Link className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </Link>
        </div>
      </form>
    </center>
  );
};

export default Formulario;
