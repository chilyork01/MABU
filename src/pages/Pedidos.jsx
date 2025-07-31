import React from 'react';

export default function Pedidos() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Finalizar Pedido</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-gray-700 text-center">
          Página de pedidos en construcción. Por ahora, contáctanos por WhatsApp para realizar tu pedido.
        </p>
        <div className="text-center mt-4">
          <a
            href="https://wa.me/56922467647"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 inline-block"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}