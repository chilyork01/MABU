import { useParams, Link } from 'react-router-dom';
import { productosNuevos, productosDisponibles } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Producto() {
  const { codigo } = useParams();
  const { addToCart } = useCart();
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  // Buscar el producto en ambas listas
  const producto = [...productosNuevos, ...productosDisponibles].find(
    p => p.codigo === codigo
  );

  if (!producto) {
    return (
      <div className="max-w-4xl mx-auto py-8 text-center">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">Producto no encontrado</h2>
        <Link to="/catalogo" className="text-pink-600 underline">Volver al catálogo</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < cantidad; i++) {
      addToCart(producto);
    }
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link to="/catalogo" className="text-pink-600 underline mb-4 inline-block">
        ← Volver al catálogo
      </Link>
      
      <div className="bg-white rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-8">
        {/* Imagen del producto */}
        <div className="flex justify-center">
          {producto.imagen ? (
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-64 h-64 object-cover rounded-lg"
            />
          ) : (
            <div className="w-64 h-64 bg-pink-100 rounded-lg flex items-center justify-center">
              <span className="text-pink-400">Sin imagen</span>
            </div>
          )}
        </div>

        {/* Información del producto */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-pink-700 mb-2">{producto.nombre}</h1>
          <p className="text-pink-500 mb-2">Código: {producto.codigo}</p>
          <p className="text-gray-600 mb-4">{producto.descripcion}</p>
          <p className="text-2xl font-bold text-pink-600 mb-6">{producto.precio}</p>

          {/* Selector de cantidad */}
          <div className="flex items-center mb-4">
            <label className="text-pink-700 mr-4">Cantidad:</label>
            <button
              onClick={() => setCantidad(Math.max(1, cantidad - 1))}
              className="bg-pink-200 text-pink-700 px-3 py-1 rounded-l"
            >
              -
            </button>
            <span className="bg-white border-t border-b border-pink-200 px-4 py-1">
              {cantidad}
            </span>
            <button
              onClick={() => setCantidad(cantidad + 1)}
              className="bg-pink-200 text-pink-700 px-3 py-1 rounded-r"
            >
              +
            </button>
          </div>

          {/* Botón agregar al carrito */}
          <button
            onClick={handleAddToCart}
            className={`py-3 px-6 rounded-lg font-semibold transition-colors ${
              agregado
                ? 'bg-green-500 text-white'
                : 'bg-pink-500 text-white hover:bg-pink-600'
            }`}
          >
            {agregado ? '¡Agregado al carrito!' : 'Agregar al carrito'}
          </button>

          {/* Información adicional */}
          <div className="mt-6 p-4 bg-pink-50 rounded-lg">
            <h3 className="font-semibold text-pink-700 mb-2">Información de compra:</h3>
            <ul className="text-sm text-pink-600 space-y-1">
              <li>• Precio incluye IVA</li>
              <li>• Envío disponible en Santiago</li>
              <li>• Consulta por descuentos por volumen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}