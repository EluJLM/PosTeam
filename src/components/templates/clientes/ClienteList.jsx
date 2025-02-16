// src/components/templates/uis/ClienteList.jsx
import React, { useEffect } from 'react';
import useClienteStore from '../../../store/stores/clienteStore';
import ClienteItem from './ClienteItem';

const ClienteList = () => {
  const { clientes, loading, fetchClientes } = useClienteStore();

  useEffect(() => {
    fetchClientes();
  }, [fetchClientes]);

  if (loading) return <p>Cargando clientes...</p>;

  return (
    <div>
      <h1>Lista de Clientes</h1>
      {clientes.map((cliente) => (
        <ClienteItem key={cliente.id} cliente={cliente} />
      ))}
    </div>
  );
};

export default ClienteList;