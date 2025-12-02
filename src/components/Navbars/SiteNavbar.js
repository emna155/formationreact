import React from 'react'
import { Link } from "react-router-dom";

const styles = {
  primary: '#6A4E23',
  dark: '#6A4E23',
  white: '#ffffff',
  gray: '#f5f5f5',
  grayText: '#666666',
};

// Composant Icon SVG
const Icon = ({ name, size = 20, color = 'currentColor' }) => {
  const icons = {
    cart: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>,
    search: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>,
    user: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>,
    menu: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>,
    close: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>,
  };

  return icons[name] || null;
};

export default function SiteNavbar({ cartCount, toggleCart, toggleMenu, isMenuOpen }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>

      {/* Top Bar */}
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '10px 0' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Icon name="phone" size={16} /> +216 29 743 489
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4R3BGcHoyzS1UKF4qUYpBdAAH5ExmXhWZ2g&s'
          alt="Logo L'Abeille Noire"
          style={{ height: '60px' }}
        />

        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
          {['Accueil', 'Catalogue', 'Contact'].map((item, i) => {
            let path =
              item === 'Accueil' ? '/' :
              item === 'Catalogue' ? '/catalogue' :
              '/Landing';

            return (
              <li key={i}>
                <Link
                  to={path}
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    textTransform: "uppercase",
                    color: i === 0 ? styles.primary : "#333",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: styles.primary }}>
            <Icon name="search" size={22} />
          </button>

          <Link to="/auth/login" style={{ color: styles.primary }}>
            <Icon name="user" size={22} />
          </Link>

          <button
            onClick={toggleCart}
            style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative' }}
          >
            <Icon name="cart" size={22} />
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: styles.primary,
              color: '#fff',
              fontSize: '12px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {cartCount}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
