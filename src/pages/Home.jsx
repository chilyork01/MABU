import React from 'react';
import { Link } from 'react-router-dom';
import { productosNuevos } from '../data/products';
import ProductCard from '../components/ProductCard';
import logo from '../assets/logo-mabu.jpg';

export default function Home() {
  // Mostrar solo los primeros 6 productos como destacados
  const productosDestacados = productosNuevos.slice(0, 6);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center py-12 bg-pink-200">
        <img
          src={logo}
          alt="Logo MABU"
          className="w-32 h-32 rounded-full mb-4 border-4 border-pink-300 object-cover"
        />
        <h1 className="text-5xl font-bold text-pink-700 tracking-widest mb-2">MABU</h1>
        <p className="text-xl text-pink-600 mb-6">Dulces coreanos en Santiago de Chile</p>
        <Link
          to="/catalogo"
          className="bg-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors"
        >
          Ver Catálogo
        </Link>
      </section>

      {/* Productos Destacados */}
      <section className="w-full max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-pink-700 text-center mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productosDestacados.map((producto) => (
            <ProductCard key={producto.codigo} producto={producto} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/catalogo"
            className="text-pink-600 hover:text-pink-800 font-semibold underline"
          >
            Ver todos los productos →
          </Link>
        </div>
      </section>
    </div>
  );
}