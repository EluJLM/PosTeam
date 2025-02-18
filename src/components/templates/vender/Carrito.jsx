// src/components/Vender/Carrito.jsx
import React from "react";
import styled from "styled-components";

const CarritoContainer = styled.div`
  margin-bottom: 20px;
`;

const CarritoItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const CantidadButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

export const Carrito = ({ carrito, eliminarDelCarrito, ajustarCantidad }) => {
  return (
    <CarritoContainer>
      <h3>Carrito</h3>
      {carrito.map((item) => (
        <CarritoItem key={item.id}>
          <p>{item.nombre} - Cantidad: {item.cantidad} - Subtotal: ${item.precio * item.cantidad}</p>
          <CantidadButton onClick={() => ajustarCantidad(item.id, -1)}>-</CantidadButton>
          <CantidadButton onClick={() => ajustarCantidad(item.id, 1)}>+</CantidadButton>
          <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
        </CarritoItem>
      ))}
    </CarritoContainer>
  );
};