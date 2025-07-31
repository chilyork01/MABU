import React from 'react';

export default function Contacto() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Contacto</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-pink-700 mb-3">María José Vergara</h3>
          <p className="text-gray-700 mb-2">
            WhatsApp: <a href="https://wa.me/56922467647" className="text-pink-600 underline">+56 9 2246 7647</a>
          </p>
          <p className="text-gray-700">
            Correo: <a href="mailto:lapinkamericana@gmail.com" className="text-pink-600 underline">lapinkamericana@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}