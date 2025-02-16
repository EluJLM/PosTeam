// src/components/templates/uis/ClienteItem.jsx
import React, { useEffect, useState } from 'react';
import useClienteStore from '../../../store/clienteStore';
import useTipoDocumentoStore from '../../../store/tipoDocumentoStore';
import ClienteForm from './ClienteForm';

const ClienteItem = ({ cliente }) => {
  const { removeCliente } = useClienteStore();
  const { tiposDocumento } = useTipoDocumentoStore();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    
    removeCliente(cliente.id);
  };
  useEffect(()=>{
    console.log(tiposDocumento[2].nombre);
  },[])

  return (
    <div>
      {isEditing ? (
        <ClienteForm cliente={cliente} onClose={() => setIsEditing(false)} />
      ) : (
        <div>
          <p>{cliente.nombre} - {tiposDocumento[cliente.tipo_de_documento_id].nombre}: {cliente.documento}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default ClienteItem;