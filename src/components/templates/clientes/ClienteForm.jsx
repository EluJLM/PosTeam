// src/components/templates/uis/ClienteForm.jsx
import React, { useState } from 'react';
import useClienteStore from '../../../store/clienteStore';
import useTipoDocumentoStore from '../../../store/tipoDocumentoStore';

const ClienteForm = ({ cliente, onClose }) => {
  const { addCliente, editCliente } = useClienteStore();
  const { tiposDocumento, fetchTiposDocumento } = useTipoDocumentoStore();
  const [nombre, setNombre] = useState(cliente?.nombre || '');
  const [telefono, setTelefono] = useState(cliente?.telefono || '');
  const [correo, setCorreo] = useState(cliente?.correo || '');
  const [direccion, setDireccion] = useState(cliente?.direccion || '');
  const [tipoDocumentoId, setTipoDocumentoId] = useState(cliente?.tipo_de_documento || '');

  // Cargar tipos de documento al montar el componente
  React.useEffect(() => {
    fetchTiposDocumento();
  }, [fetchTiposDocumento]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clienteData = {
      nombre,
      telefono,
      correo,
      direccion,
      tipo_de_documento: tipoDocumentoId,
    };

    if (cliente?.id) {
      await editCliente(cliente.id, clienteData); // Editar cliente
    } else {
      await addCliente(clienteData); // Crear cliente
    }

    onClose(); // Cerrar el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        required
      />
      <select
        value={tipoDocumentoId}
        onChange={(e) => setTipoDocumentoId(e.target.value)}
        required
      >
        <option value="">Seleccione un tipo de documento</option>
        {tiposDocumento.map((tipo) => (
          <option key={tipo.id} value={tipo.id}>
            {tipo.nombre}
          </option>
        ))}
      </select>
      <button type="submit">{cliente?.id ? 'Actualizar' : 'Crear'}</button>
      <button type="button" onClick={onClose}>
        Cancelar
      </button>
    </form>
  );
};

export default ClienteForm;