// src/views/CartContext.js
import React, { createContext, useState, useEffect } from "react";

// Création du contexte
export const CartContext = createContext();

// Provider pour englober l'application
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Charger le panier depuis localStorage au démarrage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      // Assurer que prix et quantity sont des nombres
      const parsedCart = JSON.parse(savedCart).map(item => ({
        ...item,
        prix: Number(item.prix) || 0,
        quantity: Number(item.quantity) || 1
      }));
      setCart(parsedCart);
    }
  }, []);

  // Sauvegarder le panier dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🔥 Fonction utilitaire : récupère le bon ID (id ou _id)
  const getProductId = (product) => product.id || product._id;

  // Ajouter un produit au panier
  const addToCart = (product) => {
    const productId = getProductId(product);
      const prix = Number(product.prix) || 0; // <-- garantit un nombre

    console.log("Ajout au panier:", product, "Prix:", Number(product.prix) || 0);

    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);

      if (existing) {
        // Augmente la quantité si le produit existe déjà
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Ajoute le produit avec id normalisé + quantity = 1 et prix correct
      return [
        ...prev,
        { ...product, id: productId, quantity: 1, prix }
      ]
      ;
    });
  };

  // Supprimer un produit du panier
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Modifier la quantité d'un produit
  const updateQuantity = (productId, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, Number(quantity) || 1) } // quantity minimum = 1
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
