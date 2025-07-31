import React from 'react';

export default function Servicios() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Nuestros Servicios</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-pink-700 mb-3">Envíos</h3>
          <p className="text-gray-700">Realizamos envíos a toda la Región Metropolitana.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-pink-700 mb-3">Métodos de Pago</h3>
          <p className="text-gray-700">Aceptamos transferencias bancarias y efectivo.</p>
        </div>
      </div>
    </div>
  );
}