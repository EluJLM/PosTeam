import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useClienteStore from "../../../store/clienteStore";
import Input from "../../moleculas/Input";
import Button from "../../moleculas/Button";
import { Container2, DivRow } from "../../../styles/GlobalStyles";

const ClientesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const ClienteCard = styled.div`
  padding: 12px 20px;
  border: 2px solid ${({ selected }) => (selected ? "#007bff" : "#ddd")};
  border-radius: 10px;
  cursor: pointer;
  background: ${({ selected }) => (selected ? "#007bff" : "#f9f9f9")};
  color: ${({ selected }) => (selected ? "#fff" : "#333")};
  font-weight: bold;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 200px;

  &:hover {
    background: ${({ selected }) => (selected ? "#0056b3" : "#e0e0e0")};
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
    font-weight: normal;
  }
`;

export const ClienteSelector = ({ clienteId, setClienteId }) => {
  const { clientes, fetchClientes } = useClienteStore();
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    fetchClientes("cliente");
  }, []);

  useEffect(() => {
    if (clientes.length === 1) {
      setClienteId(clientes[0].id);
    }
  }, [clientes, setClienteId]);

  return (
    <Container2>
      <h3>Seleccionar Cliente</h3>
      <DivRow>
        <Input
          label={"Buscar Clientes"}
          placeholder={"Buscar cliente"}
          name={"buscar-clientes"}
          onChange={(e) => setBuscar(e.target.value)}
          value={buscar}
          type={"text"}
        />
        <Button onClick={() => fetchClientes(buscar)} text={"Buscar"} />
      </DivRow>

      <ClientesGrid>
        {clientes.map((cliente) => (
          <ClienteCard
            key={cliente.id}
            selected={cliente.id === clienteId}
            onClick={() => setClienteId(cliente.id)}
          >
            {cliente.nombre} <br /> <p>Documento: {cliente.documento}</p>
          </ClienteCard>
        ))}
      </ClientesGrid>
    </Container2>
  );
};
