// src/components/Vender/ProductoList.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useProductoStore from "../../../store/productoStore";
import { Container2, DivRow } from "../../../styles/GlobalStyles";
import Input from "../../moleculas/Input";
import Button from "../../moleculas/Button";



export const ProductoList = ({ agregarAlCarrito }) => {
  const { productos, fetchProductos, inicializarProductos } = useProductoStore();
  const [buscar, setBuscar] = useState("");

  const handleFetch = () => {
    if(buscar === "") return;
    fetchProductos(buscar);
    
  };

  useEffect(() => {
    if(productos.length === 1) {
      agregarAlCarrito(productos[0]);
        inicializarProductos();
        setBuscar("");
    }
  }, [productos]);

  const buscarConEnter = (e) =>{
    if(e.key === "Enter"){
      handleFetch();
    }
  }
  return (
    <Container2>
        <h3>Productos</h3>
        <DivRow>
            <Input 
              label="Buscar"
              placeholder="Buscar producto"
              type="text"
              name="buscar-productos"
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
              onKeyDown={buscarConEnter}          
            />
            <Button onClick={handleFetch} text={"Buscar"}/>
        </DivRow>
        <DivRow>
      {productos.length == 0 ? <div>esperando a que busques produtos</div> : productos.map((producto) => (
          <ProductoItem key={producto.id}>
          <p>{producto.nombre}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Stock: {producto.stock}</p>
          <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </ProductoItem>
      ))}
      </DivRow>
    </Container2>
  );
};



const ProductoItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;
