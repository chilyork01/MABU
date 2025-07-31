import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importar todas las páginas
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Producto from "./pages/Producto";
import Carrito from "./pages/Carrito";
import Pedidos from "./pages/Pedidos";
import SobreNosotros from "./pages/SobreNosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Testimonios from "./pages/Testimonios";
import './index.css';
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-pink-100">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/producto/:codigo" element={<Producto />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/testimonios" element={<Testimonios />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;