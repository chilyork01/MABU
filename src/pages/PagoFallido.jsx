export default function PagoFallido() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Pago fallido</h1>
      <p className="text-gray-700 mb-6">
        Tu pago no pudo completarse. Puedes intentar nuevamente o contactarnos para asistencia.
      </p>
      <div className="space-x-3">
        <a href="/carrito" className="text-white bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg">Intentar de nuevo</a>
        <a href="/contacto" className="text-red-600 underline">Contactar soporte</a>
      </div>
    </div>
  );
}