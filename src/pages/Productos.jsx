import { useEffect } from "react";
import { useProductsStore } from "../store/productsStore";

export function Productos() {
  const { products, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            {prod.nombre} - ${prod.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}
