export default function PagoPendiente() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-center">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">Pago pendiente</h1>
      <p className="text-gray-700 mb-6">
        Tu pago está en proceso. Te notificaremos cuando se confirme.
      </p>
      <a href="/catalogo" className="text-white bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg">
        Seguir comprando
      </a>
    </div>
  );
}