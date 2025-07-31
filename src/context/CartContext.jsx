import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

// Reducer para manejar las acciones del carrito
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find(item => item.codigo === action.payload.codigo);
      if (existingItem) {
        return state.map(item =>
          item.codigo === action.payload.codigo
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, cantidad: 1 }];

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.codigo !== action.payload);

    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.codigo === action.payload.codigo
          ? { ...item, cantidad: action.payload.cantidad }
          : item
      );

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    // Cargar carrito desde localStorage al iniciar
    const savedCart = localStorage.getItem('mabu-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('mabu-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (producto) => {
    dispatch({ type: 'ADD_TO_CART', payload: producto });
  };

  const removeFromCart = (codigo) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: codigo });
  };

  const updateQuantity = (codigo, cantidad) => {
    if (cantidad <= 0) {
      removeFromCart(codigo);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { codigo, cantidad } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      // Extraer el número del precio (ej: "$5.100 + IVA" -> 5100)
      const precio = parseInt(item.precio.replace(/[^\d]/g, '')) || 0;
      return total + (precio * item.cantidad);
    }, 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartItemsCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
};