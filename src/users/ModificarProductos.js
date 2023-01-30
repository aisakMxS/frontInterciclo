import React, { useState } from 'react';
import axios from 'axios';

const UpdateProduct = ({ id }) => {
const [product, setProduct] = useState({
nombre: '',
cantidad: '',
precio: '',
file: null,
});

const handleChange = (event) => {
setProduct({ ...product, [event.target.name]: event.target.value });
};

const handleFileChange = (event) => {
setProduct({ ...product, file: event.target.files[0] });
};

const handleSubmit = (event) => {
event.preventDefault();
const formData = new FormData();
formData.append('file', product.file);
formData.append('nombre', product.nombre);
formData.append('cantidad', product.cantidad);
formData.append('precio', product.precio);

axios.post(`http://localhost:8080/api/cambiarproducto?id=${id}`, formData)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
};

return (
    <form onSubmit={handleSubmit}>
    <input
         type="text"
         name="nombre"
         placeholder="Nombre del producto"
         value={product.nombre}
         onChange={handleChange}
       />
    <input
         type="text"
         name="cantidad"
         placeholder="Cantidad"
         value={product.cantidad}
         onChange={handleChange}
       />
    <input
         type="text"
         name="precio"
         placeholder="Precio"
         value={product.precio}
         onChange={handleChange}
       />
    <input
         type="file"
         name="file"
         onChange={handleFileChange}
       />
    <button type="submit">Actualizar producto</button>
    </form>
    );
    };
    
    export default UpdateProduct;