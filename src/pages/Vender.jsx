
import React, { useState } from "react";
import { ProductoList } from "../components/templates/vender/ProductoList";
import { Carrito } from "../components/templates/vender/Carrito";
import { ClienteSelector } from "../components/templates/vender/ClienteSelector";
import { MetodoPagoSelector } from "../components/templates/vender/MetodoPagoSelector";
import useVentaStore from "../store/ventaStore";
import useDetalleVentaStore from "../store/detalleVentaStore";

export const Vender = () => {
  const { addVenta, ventas } = useVentaStore();
  const { addDetallesVenta } = useDetalleVentaStore();
  const [clienteId, setClienteId] = useState("");
  const [metodoPagoId, setMetodoPagoId] = useState("efectivo"); // Efectivo por defecto
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const productoEnCarrito = carrito.find((item) => item.id === producto.id);
    if (productoEnCarrito) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito(carrito.filter((item) => item.id !== productoId));
  };

  const ajustarCantidad = (productoId, cantidad) => {
    setCarrito(
      carrito.map((item) =>
        item.id === productoId
          ? { ...item, cantidad: Math.max(1, item.cantidad + cantidad) }
          : item
      )
    );
  };

  const finalizarVenta = async () => {
    if (!clienteId || carrito.length === 0 || !metodoPagoId) {
      alert("Selecciona un cliente, un método de pago y agrega productos al carrito.");
      return;
    }

    const total = carrito.reduce(
      (sum, item) => sum + item.precio * item.cantidad,
      0
    );

    const ventaData = {
      cliente_id: clienteId,
      metodo_de_pago_id: metodoPagoId,
      total,
    };

    try {
      await addVenta(ventaData);
      
      const detallesData = carrito.map((item) => ({
        venta_id: ventas.id,
        producto_id: item.id,
        cantidad: item.cantidad,
        precio_unitario: item.precio,
        subtotal: item.precio * item.cantidad,
      }));
      await addDetallesVenta(detallesData);
      setCarrito([]);
      setClienteId("");
      setMetodoPagoId("efectivo");
      alert("Venta realizada con éxito.");
    } catch (error) {
      alert("Error al realizar la venta: " + error.message);
    }
  };

  return (
    <>
      <h2>Página de ventas</h2>
      <ProductoList agregarAlCarrito={agregarAlCarrito} />
      <Carrito
        carrito={carrito}
        eliminarDelCarrito={eliminarDelCarrito}
        ajustarCantidad={ajustarCantidad}
      />
      <ClienteSelector clienteId={clienteId} setClienteId={setClienteId} />
      <MetodoPagoSelector metodoPagoId={metodoPagoId} setMetodoPagoId={setMetodoPagoId} />
      <button onClick={finalizarVenta}>Finalizar Venta</button>
    </>
  );
};