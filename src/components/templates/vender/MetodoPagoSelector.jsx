// src/components/Vender/MetodoPagoSelector.jsx
import React, { useEffect } from "react";
import styled from "styled-components";
import useMetodoPagoStore from "../../../store/metodoPagoStore";

const MetodoPagoContainer = styled.div`
  margin-bottom: 20px;
`;

export const MetodoPagoSelector = ({ metodoPagoId, setMetodoPagoId }) => {
  const { metodosPago, fetchMetodosPago } = useMetodoPagoStore();

  useEffect(()=> {
    fetchMetodosPago();
  },[])
  return (
    <MetodoPagoContainer>
      <h3>Seleccionar Método de Pago</h3>
      <select
        value={metodoPagoId}
        onChange={(e) => setMetodoPagoId(e.target.value)}
      >
        <option value="">Seleccione un método de pago</option>
        {metodosPago.map((metodo) => (
          <option key={metodo.id} value={metodo.id}>
            {metodo.nombre}
          </option>
        ))}
      </select>
    </MetodoPagoContainer>
  );
};