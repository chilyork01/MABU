// src/pages/Carrito.jsx
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

// Cambia este número por tu WhatsApp (sin espacios ni guiones)
const WHATSAPP_NUMBER = "56922467647";

function getWhatsAppLink(cart, total) {
  if (!cart.length) return "#";
  
  let mensaje = "¡Hola! Quiero hacer un pedido en MABU:%0A%0A";
  
  // Agregar cada producto del carrito
  cart.forEach(item => {
    mensaje += `• ${item.nombre} (${item.codigo}) x${item.cantidad} - ${item.precio}%0A`;
  });
  
  // Agregar total
  mensaje += `%0ATotal: $${total.toLocaleString()} + IVA%0A%0A`;
  
  // Agregar espacio para que el cliente escriba su nombre
  mensaje += "Mi nombre es: %0A";
  mensaje += "Mi dirección es: %0A";
  mensaje += "Comentarios adicionales: ";
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;
}

export default function Carrito() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-pink-400 text-3xl">🛒</span>
          </div>
          <h2 className="text-2xl font-bold text-pink-700 mb-4">Tu carrito está vacío</h2>
          <p className="text-pink-500 mb-6">¡Agrega algunos dulces deliciosos!</p>
          <Link 
            to="/catalogo" 
            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 font-semibold transition-colors"
          >
            Ver productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-pink-700">Tu carrito</h2>
        <Link 
          to="/catalogo" 
          className="text-pink-600 hover:text-pink-800 underline"
        >
          ← Seguir comprando
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        {/* Lista de productos en el carrito */}
        <div className="space-y-4">
          {cart.map((item) => (
            <div 
              key={item.codigo} 
              className="flex items-center justify-between border-b border-pink-100 pb-4 last:border-b-0"
            >
              {/* Información del producto */}
              <div className="flex-1">
                <h3 className="font-semibold text-pink-700 text-lg">{item.nombre}</h3>
                <p className="text-pink-500 text-sm">Código: {item.codigo}</p>
                <p className="text-pink-600 font-medium">{item.precio}</p>
              </div>

              {/* Controles de cantidad y eliminar */}
              <div className="flex items-center space-x-4">
                {/* Selector de cantidad */}
                <div className="flex items-center border border-pink-200 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.codigo, Math.max(1, item.cantidad - 1))}
                    className="bg-pink-100 text-pink-700 px-3 py-2 rounded-l-lg hover:bg-pink-200 transition-colors"
                  >
                    -
                  </button>
                  <span className="bg-white px-4 py-2 font-semibold text-pink-700 min-w-[3rem] text-center">
                    {item.cantidad}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.codigo, item.cantidad + 1)}
                    className="bg-pink-100 text-pink-700 px-3 py-2 rounded-r-lg hover:bg-pink-200 transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Botón eliminar */}
                <button
                  onClick={() => removeFromCart(item.codigo)}
                  className="text-red-500 hover:text-red-700 font-medium transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen y acciones */}
        <div className="mt-8 pt-6 border-t border-pink-200">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={clearCart}
              className="text-pink-600 hover:text-pink-800 underline"
            >
              Vaciar carrito
            </button>
            
            <div className="text-right">
              <p className="text-sm text-pink-500 mb-1">
                {cart.reduce((total, item) => total + item.cantidad, 0)} productos
              </p>
              <p className="text-2xl font-bold text-pink-700">
                Total: ${getCartTotal().toLocaleString()} + IVA
              </p>
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <div className="text-center">
            <a
              href={getWhatsAppLink(cart, getCartTotal())}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 font-bold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>📱</span>
              <span>Finalizar pedido por WhatsApp</span>
            </a>
            <p className="text-pink-500 text-sm mt-2">
              Te contactaremos para confirmar tu pedido y coordinar la entrega
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}