import { useState } from "react";

function Tarjeta( {nombre, tipo, precio, children } ) {
    
    const [cantidad, setCantidad ]= useState(0);
    const [precioTotal, setPrecioTotal ]= useState(0);
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title"> { nombre } </h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{ tipo }</h6>
                <p className="card-text">{children}</p>
                <p className="card-text">Precio unitario: {precio}</p>
                <p className="card-text">Cantidad: {cantidad}
                    <button onClick={() => {
                        setPrecioTotal((cantidad+1)*precio);
                        setCantidad(cantidad+1);
                    }}>+</button>
                </p>
                <p className="card-text">Total: {precioTotal}</p>
                
            </div>
        </div>
    )

}

export default Tarjeta;