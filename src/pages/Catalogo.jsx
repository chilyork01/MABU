import { productosNuevos, productosDisponibles } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Catalogo() {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Dulces Nuevos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {productosNuevos.map((prod) => (
          <Link key={prod.codigo} to={`/producto/${prod.codigo}`}>
            <ProductCard producto={prod} />
          </Link>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Dulces Disponibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productosDisponibles.map((prod) => (
          <Link key={prod.codigo} to={`/producto/${prod.codigo}`}>
            <ProductCard producto={prod} />
          </Link>
        ))}
      </div>
    </div>
  );
}