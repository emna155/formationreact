// src/views/CartPage.js
import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { useHistory } from 'react-router-dom';

// Composant pour un article du panier
const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div style={{
    display: 'flex',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    marginBottom: '15px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
    <img
      src={item.image}
      alt={item.name}
      style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
    />
    <div style={{ flex: 1, minWidth: '200px' }}>
      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{item.name}</h3>
      <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>{item.description}</p>
      <p style={{ margin: '10px 0', fontSize: '18px', fontWeight: 'bold', color: '#6A4E23' }}>
        {item.price} TND
      </p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button
        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        disabled={item.quantity <= 1}
        style={{
          width: '35px',
          height: '35px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          backgroundColor: '#fff',
          cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          opacity: item.quantity <= 1 ? 0.5 : 1
        }}
      >-</button>
      <span style={{ minWidth: '40px', textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}>
        {item.quantity}
      </span>
      <button
        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        style={{
          width: '35px',
          height: '35px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          backgroundColor: '#fff',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333'
        }}
      >+</button>
    </div>
    <div style={{ textAlign: 'right', minWidth: '100px' }}>
      <p style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: 'bold', color: '#6A4E23' }}>
        {(item.prix * item.quantity).toFixed(2)} TND
      </p>
      <button
        onClick={() => onRemove(item.id)}
        style={{ border: 'none', backgroundColor: 'transparent', color: '#e74c3c', cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}
      >Supprimer</button>
    </div>
  </div>
);

// Composant principal du panier
const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
   const history = useHistory(); // <- hook de navigation

  const handleCheckout = () => {
    // Redirige vers la page checkout
    history.push('/checkout');
  };
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    updateQuantity(id, quantity);
  };

  const handleRemoveItem = (id) => removeFromCart(id);

  const handleClearCart = () => {
    if (window.confirm('Êtes-vous sûr de vouloir vider le panier ?')) {
      cart.forEach(item => removeFromCart(item.id));
      setDiscount(0);
      setPromoCode('');
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'MIEL10') setDiscount(0.10);
    else if (promoCode.toUpperCase() === 'MIEL20') setDiscount(0.20);
    else { alert('Code promo invalide'); setDiscount(0); return; }

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.prix * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const shipping = subtotal > 0 ? (subtotal >= 100 ? 0 : 7.00) : 0;
  const total = subtotal - discountAmount + shipping;

  

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', margin: 0 }}>
            Mon Panier ({cart.length} {cart.length !== 1 ? 'articles' : 'article'})
          </h1>
          <button
            onClick={() => window.history.back()}
            style={{ color: '#6A4E23', backgroundColor: 'transparent', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer', textDecoration: 'underline' }}
          >
            ← Continuer mes achats
          </button>
        </div>

        {showSuccess && (
          <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #c3e6cb' }}>
            ✓ Code promo appliqué avec succès ! {(discount * 100).toFixed(0)}% de réduction
          </div>
        )}

        {cart.length === 0 ? (
          <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '60px 20px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🛒</div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>Votre panier est vide</h2>
            <p style={{ color: '#666', marginBottom: '30px' }}>Découvrez nos produits et ajoutez-les à votre panier</p>
            <button onClick={() => window.history.back()} style={{ backgroundColor: '#6A4E23', color: '#fff', border: 'none', padding: '15px 40px', fontSize: '16px', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>
              Voir les produits
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 400px' : '1fr', gap: '30px', alignItems: 'start' }}>
            <div>
              {cart.map(item => (
                <CartItem key={item.id} item={item} onUpdateQuantity={handleUpdateQuantity} onRemove={handleRemoveItem} />
              ))}
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '25px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', position: window.innerWidth > 768 ? 'sticky' : 'relative', top: '20px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Résumé de la commande</h2>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#333' }}>Code promo</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} placeholder="Entrez votre code" style={{ flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '14px' }} />
                  <button onClick={handleApplyPromo} style={{ padding: '10px 20px', backgroundColor: '#6A4E23', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>Appliquer</button>
                </div>
                <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>Codes disponibles: MIEL10 (-10%), MIEL20 (-20%)</p>
              </div>

              <div style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '15px 0', marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                  <span>Sous-total</span><span>{subtotal.toFixed(2)} TND</span>
                </div>
                {discount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px', color: '#27ae60', fontWeight: '600' }}>
                    <span>Réduction ({(discount * 100).toFixed(0)}%)</span>
                    <span>-{discountAmount.toFixed(2)} TND</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: shipping === 0 && subtotal >= 100 ? '#27ae60' : '#666' }}>
                  <span>Livraison</span>
                  <span>{shipping === 0 && subtotal >= 100 ? 'GRATUITE' : `${shipping.toFixed(2)} TND`}</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
                <span>Total</span>
                <span style={{ color: '#6A4E23' }}>{total.toFixed(2)} TND</span>
              </div>

              <button onClick={handleCheckout} style={{ width: '100%', padding: '15px', backgroundColor: '#6A4E23', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' }}>Passer la commande</button>
              <button onClick={handleClearCart} style={{ width: '100%', padding: '15px', backgroundColor: 'transparent', color: '#6A4E23', border: '2px solid #6A4E23', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Vider le panier</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
