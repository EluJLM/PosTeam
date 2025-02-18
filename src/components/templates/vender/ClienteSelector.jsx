// src/components/Vender/ClienteSelector.jsx
import React, { useState } from "react";
import styled from "styled-components";
import useClienteStore from "../../../store/clienteStore";

const ClienteContainer = styled.div`
  margin-bottom: 20px;
`;

const BuscarInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ClienteSelector = ({ clienteId, setClienteId }) => {
  const { clientes, fetchClientes } = useClienteStore();
  const [buscar, setBuscar] = useState("");

  const handleFetch = () => {
    fetchClientes(buscar);
  };

  return (
    <ClienteContainer>
      <h3>Seleccionar Cliente</h3>
      <BuscarInput
        type="text"
        placeholder="Buscar clientes..."
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
      />
      <button onClick={handleFetch}>Buscar</button>
      <select
        value={clienteId}
        onChange={(e) => setClienteId(e.target.value)}
      >
        <option value="">Seleccione un cliente</option>
        {clientes.map((cliente) => (
          <option key={cliente.id} value={cliente.id}>
            {cliente.nombre}
          </option>
        ))}
      </select>
    </ClienteContainer>
  );
};