import { Link } from 'react-router-dom';

export default function ProductCard({ producto }) {
  return (
    <Link to={`/producto/${producto.codigo}`}>
      <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer">
        {producto.imagen && (
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-24 h-24 object-cover mb-2 rounded"
          />
        )}
        <h3 className="text-lg font-bold text-pink-700 text-center">{producto.nombre}</h3>
        <p className="text-pink-500 text-center text-sm">{producto.descripcion}</p>
        <span className="mt-2 text-pink-600 font-semibold">{producto.precio}</span>
      </div>
    </Link>
  );
}