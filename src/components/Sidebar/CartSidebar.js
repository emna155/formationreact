// src/components/Sidebar/CartSidebar.js
import React from 'react';

const CartSidebar = ({ cart, showCart, toggleCart }) => {
  if (!showCart) return null;

  const total = cart.reduce((sum, item) => sum + (item.quantity || 1) * parseFloat(item.prix), 0);

  return (
    <div style={{
      position: 'fixed',
      top: '120px',
      right: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 5px 30px rgba(0,0,0,0.2)',
      borderRadius: '10px',
      width: '320px',
      maxWidth: '90vw',
      zIndex: 1001,
      overflow: 'hidden'
    }}>
      <div style={{
        backgroundColor: "black",
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h3 style={{ fontWeight: 'bold', margin: 0 }}>
          Cart ({cart.reduce((total, item) => total + (item.quantity || 1), 0)})
        </h3>
        <button onClick={toggleCart} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}>X</button>
      </div>

      <div style={{ padding: '15px', maxHeight: '300px', overflowY: 'auto' }}>
        {cart.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999', padding: '20px 0' }}>Your cart is empty</p>
        ) : (
          cart.map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={`http://localhost:5000/images/${item.image}`}
 alt={item.nom} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }} />
                <span>{item.nom}</span>
              </div>
              <span style={{ fontWeight: 'bold' }}>
                {item.prix} TND × {item.quantity || 1}
              </span>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div style={{ padding: '15px', backgroundColor: '#f5f5f5' }}>
          <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>
            Total: ${total.toFixed(2)}
          </p>
          <button
            style={{ width: '100%', backgroundColor: "black", color: '#fff', border: 'none', padding: '12px', fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => {
              localStorage.setItem('cart', JSON.stringify(cart));
              window.location.href = '/cart';
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
