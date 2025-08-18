const mercadopago = require('mercadopago');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { items, payer, external_reference, back_urls } = JSON.parse(event.body || '{}');

    mercadopago.configure({ access_token: process.env.MP_ACCESS_TOKEN });

    const preference = {
      items: items?.map(i => ({
        title: i.title,
        quantity: i.quantity,
        unit_price: Number(i.unit_price),
        currency_id: 'CLP'
      })),
      payer: payer || {},
      external_reference: external_reference || `order_${Date.now()}`,
      back_urls: back_urls || {
        success: 'https://www.mabudulcescoreanos.com/gracias',
        failure: 'https://www.mabudulcescoreanos.com/pago-fallido',
        pending: 'https://www.mabudulcescoreanos.com/pago-pendiente'
      },
      auto_return: 'approved',
      notification_url: process.env.MP_NOTIFICATION_URL || 'https://famous-douhua-f99b86.netlify.app/.netlify/functions/mpWebhook'
    };

    const res = await mercadopago.preferences.create(preference);
    return {
      statusCode: 200,
      body: JSON.stringify({
        id: res.body.id,
        init_point: res.body.init_point,
        sandbox_init_point: res.body.sandbox_init_point
      })
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Error creando preferencia' }) };
  }
};