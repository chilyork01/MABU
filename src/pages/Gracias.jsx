export default function Gracias() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-center">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">¡Gracias por tu compra! 🩷</h1>
      <p className="text-gray-700 mb-6">
        Hemos recibido tu pago. Te contactaremos por WhatsApp o email con los detalles del envío.
      </p>
      <a href="/catalogo" className="text-white bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg">
        Volver al catálogo
      </a>
    </div>
  );
}