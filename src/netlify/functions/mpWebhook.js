exports.handler = async (event) => {
  // Mercado Pago hace un GET primero para verificar
  if (event.httpMethod === 'GET') {
    return { statusCode: 200, body: 'OK' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    console.log('Webhook MP:', body);
    // Aquí luego puedes consultar el pago por ID y actualizar tu base de datos
    return { statusCode: 200, body: 'Received' };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: 'Error' };
  }
};