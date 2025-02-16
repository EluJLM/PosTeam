import { useEffect, useState } from "react";
import useProductoStore from "../store/productoStore";

export const Vender = () => {
    
    const { productos, loading, fetchProductos } = useProductoStore();
    const [buscar, setBuscar] = useState("");
    const handleFetch = () => {
        fetchProductos(buscar);
    }
    
    return(
        <>
            <h2>Pagina de ventas</h2>
            <input 
                type="text"
                value={buscar}
                onChange={(e) => setBuscar(e.target.value)}
            />
            <button onClick={handleFetch}>Buscar</button>

            {productos.map((producto) => (
                    <div key={producto.id}>
                        <p>{producto.nombre}</p>
                        <p>{producto.precio}</p>
                        <p>{producto.stock}</p>
                    </div>
                  ))}
        </>
    )
}