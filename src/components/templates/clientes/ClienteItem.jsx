// src/components/templates/uis/ClienteItem.jsx
import React, { useState } from 'react';
import useClienteStore from '../../../store/clienteStore';
import ClienteForm from './ClienteForm';

const ClienteItem = ({ cliente }) => {
  const { removeCliente } = useClienteStore();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    removeCliente(cliente.id);
  };

  return (
    <div>
      {isEditing ? (
        <ClienteForm cliente={cliente} onClose={() => setIsEditing(false)} />
      ) : (
        <div>
          <p>{cliente.nombre} - {cliente.telefono}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default ClienteItem;