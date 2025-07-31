import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { getCartItemsCount } = useCart();
  const itemsCount = getCartItemsCount();

  return (
    <nav className="bg-pink-200 px-4 py-3 flex justify-between items-center shadow">
      <Link to="/" className="text-2xl font-bold text-pink-700">MABU</Link>
      <div className="space-x-4 flex items-center">
        <Link to="/catalogo" className="text-pink-700 hover:underline">Catálogo</Link>
        <Link to="/carrito" className="text-pink-700 hover:underline relative">
          Carrito
          {itemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemsCount}
            </span>
          )}
        </Link>
        <Link to="/pedidos" className="text-pink-700 hover:underline">Pedidos</Link>
        <Link to="/servicios" className="text-pink-700 hover:underline">Servicios</Link>
        <Link to="/sobre-nosotros" className="text-pink-700 hover:underline">Sobre Nosotros</Link>
        <Link to="/contacto" className="text-pink-700 hover:underline">Contacto</Link>
      </div>
    </nav>
  );
}