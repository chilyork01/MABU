import React from 'react';

export default function SobreNosotros() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Sobre Nosotros</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-gray-700 mb-4">
          En MABU nos especializamos en traer los mejores dulces coreanos directamente a Santiago de Chile.
        </p>
        <p className="text-gray-700 mb-4">
          Nuestra misión es compartir la dulzura y la alegría de los sabores únicos de Corea del Sur.
        </p>
        <p className="text-gray-700">
          Cada producto es seleccionado cuidadosamente para garantizar la mejor calidad y experiencia para nuestros clientes.
        </p>
      </div>
    </div>
  );
}