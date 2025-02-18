// src/components/Vender/ProductoList.jsx
import React, { useState } from "react";
import styled from "styled-components";
import useProductoStore from "../../../store/productoStore";
import { DivRow } from "../../../styles/GlobalStyles";

const ProductoContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
`;

const ProductoItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const BuscarInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ProductoList = ({ agregarAlCarrito }) => {
  const { productos, fetchProductos } = useProductoStore();
  const [buscar, setBuscar] = useState("");

  const handleFetch = () => {
    fetchProductos(buscar);
  };

  return (
    <ProductoContainer>
        <h3>Productos</h3>
        <DivRow>
            <BuscarInput
            type="text"
            placeholder="Buscar productos..."
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
            />
            <button onClick={handleFetch}>Buscar</button>
        </DivRow>
        <DivRow>
      {productos.map((producto) => (
          <ProductoItem key={producto.id}>
          <p>{producto.nombre}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Stock: {producto.stock}</p>
          <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </ProductoItem>
      ))}
      </DivRow>
    </ProductoContainer>
  );
};