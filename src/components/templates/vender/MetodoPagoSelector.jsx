import React, { useEffect } from "react";
import styled from "styled-components";
import useMetodoPagoStore from "../../../store/metodoPagoStore";

const MetodoPagoContainer = styled.div`
  margin-bottom: 20px;
`;

const OpcionesContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const MetodoCard = styled.div`
  padding: 12px 20px;
  border: 2px solid ${({ selected }) => (selected ? "#007bff" : "#ddd")};
  border-radius: 10px;
  cursor: pointer;
  background: ${({ selected }) => (selected ? "#007bff" : "#f9f9f9")};
  color: ${({ selected }) => (selected ? "#fff" : "#333")};
  font-weight: bold;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 150px;

  &:hover {
    background: ${({ selected }) => (selected ? "#0056b3" : "#e0e0e0")};
  }
`;

export const MetodoPagoSelector = ({ metodoPagoId, setMetodoPagoId }) => {
  const { metodosPago, fetchMetodosPago } = useMetodoPagoStore();

  useEffect(() => {
    fetchMetodosPago();
  }, []);

  useEffect(() => {
      setMetodoPagoId(metodosPago[0]?.id);
  }, [metodosPago]);

  return (
    <MetodoPagoContainer>
      <h3>Seleccionar Método de Pago</h3>
      <OpcionesContainer>
        {metodosPago.map((metodo) => (
          <MetodoCard
            key={metodo.id}
            selected={metodo.id === metodoPagoId}
            onClick={() => setMetodoPagoId(metodo.id)}
          >
            {metodo.nombre}
          </MetodoCard>
        ))}
      </OpcionesContainer>
    </MetodoPagoContainer>
  );
};
