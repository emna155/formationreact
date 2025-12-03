import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import SiteNavbar from "../components/Navbars/SiteNavbar";
import CartSidebar from 'components/Sidebar/CartSidebar';
import { CartContext } from './CartContext';

// Styles
const styles = {
  primary: '#6A4E23',
  white: '#ffffff',
  grayText: '#666666',
};

// Composant Icon SVG
const Icon = ({ name, size = 20, color = 'currentColor' }) => {
  const icons = {
    left: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>,
    right: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>,
  };
  return icons[name] || null;
};

// Hero Slider
const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "Bienvenue dans la ruche L’Abeille Noire", subtitle: "Goûtez la nature", bg: "url(" + require("assets/img/p5.png").default + ")" },
    { title: "Organic Products", subtitle: "Best quality products directly from farms to your table", bg: "url(https://png.pngtree.com/thumb_back/fh260/background/20240914/pngtree-photo-of-a-jar-sweet-fresh-delicious-bee-honey-in-glass-image_16210737.jpg)" },
    { title: "Special Offers", subtitle: "Up to 50% off on selected items this week", bg: "url(" + require("assets/img/p3.jpg").default + ")" },
  ];

  return (
    <div style={{ backgroundImage: slides[current].bg, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', color: 'black', textAlign: 'center', transition: 'background 0.5s ease' }}>
      <div style={{ maxWidth: '800px', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>{slides[current].title}</h1>
        <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.9 }}>{slides[current].subtitle}</p>
        <button
          onClick={() => window.location.href = '/catalogue'}
          style={{
            backgroundColor: styles.primary,
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: '15px 40px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase'
          }}
        >
          Shop Now
        </button>
      </div>
      <button onClick={() => setCurrent(p => p === 0 ? slides.length - 1 : p - 1)} style={{ position: 'absolute', left: '20px', backgroundColor: styles.primary, border: 'none', padding: '15px', cursor: 'pointer', color: '#fff' }}>
        <Icon name="left" size={24} />
      </button>
      <button onClick={() => setCurrent(p => (p + 1) % slides.length)} style={{ position: 'absolute', right: '20px', backgroundColor: styles.primary, border: 'none', padding: '15px', cursor: 'pointer', color: '#fff' }}>
        <Icon name="right" size={24} />
      </button>
    </div>
  );
};

// Categories
const Categories = () => {
  const cats = [
    { name: "Miels", category: "all", backgroundImage: "https://www.sweethoneyco.co.uk/wp-content/uploads/2020/08/bee-products-scaled.jpg" },
    { name: "Produits Apicoles", category: "top", backgroundImage: "https://img.passeportsante.net/1200x675/2021-05-03/i102093-miel-nu.webp" },
    { name: "Autres Produits", category: "best", backgroundImage: "https://www.neozone.org/blog/wp-content/uploads/2020/12/miel-cosmetique-002.jpg" },
  ];

  return (
    <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>Categories</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {cats.map((c, i) => (
          <div key={i} style={{ height: '250px', borderRadius: '10px', overflow: 'hidden', position: 'relative', backgroundImage: `url(${c.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Link
              to={`/catalogue?category=${c.category}`}
              style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: styles.primary, color: '#fff', padding: '15px', fontWeight: 'bold', textAlign: 'center', textDecoration: 'none' }}
            >
              {c.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer simplifié
const Footer = () => (
  <footer style={{ backgroundColor: '#000', color: '#fff', padding: '60px 20px' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      © 2025 L'Abeille Noire. Tous droits réservés.
    </div>
  </footer>
);

// Landing Component
export default function Landing() {
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: '100vh' }}>
      <SiteNavbar
        cartCount={cart.reduce((total, item) => total + (item.quantity || 1), 0)}
        toggleCart={() => setShowCart(!showCart)}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      <CartSidebar cart={cart} showCart={showCart} toggleCart={() => setShowCart(false)} />
      <main>
        <HeroSlider />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}
