import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SiteNavbar from "components/Navbars/SiteNavbar";
import FooterSmall from "components/Footers/FooterSmall";
import CartSidebar from "components/Sidebar/CartSidebar";
import { CartContext } from "views/CartContext";
import axios from 'axios';

// Hook paramètres URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Carte produit
const ProductCard = ({ product, onAddToCart }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
        position: 'relative'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ position: 'relative', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={product.image || "https://via.placeholder.com/140"}   // IMAGE PAR DÉFAUT
          alt={product.nom}
          style={{ width: '140px', height: '140px', objectFit: 'contain' }}
        />

        {hover && (
          <div style={{
            position: 'absolute', inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <button
              onClick={() => onAddToCart(product)}
              style={{
                backgroundColor: "#000",
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                color: '#fff',
                fontWeight: 'bold'
              }}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>

      <div style={{ padding: '15px', backgroundColor: '#f5f5f5' }}>
        <h4 style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>{product.nom}</h4>
        <span style={{ backgroundColor: "#000", color: '#fff', padding: '5px 12px', fontWeight: 'bold' }}>
           {product.prix} TND
        </span>
      </div>
    </div>
  );
};

export default function Catalogue() {
  const { cart, addToCart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const query = useQuery();
  const categoryParam = query.get('category') || 'all';
  const [filter, setFilter] = useState(categoryParam);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let res = await axios.get("http://localhost:5000/produit/getAllProduit");
        let data = res.data;

        // NORMALISATION : conversion _id → id + prix → number
        data = data.map(p => ({
          ...p,
          id: p._id,
          prix:Number(p.prix)
        }));

        // Filtre catégorie si ≠ all
        if (filter !== 'all') {
          data = data.filter(
            p => p.categorie?.nom?.toLowerCase().replace(/\s+/g, '-') === filter
          );
        }

        setProducts(data);
      } catch (err) {
        console.error("ERROR LOADING PRODUCTS:", err);
      }
    };

    fetchProducts();
  }, [filter]);

  return (
    <div>
      <SiteNavbar
        cartCount={cart.reduce((total, item) => total + (item.quantity || 1), 0)}
        toggleCart={() => setShowCart(!showCart)}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      <CartSidebar cart={cart} showCart={showCart} toggleCart={() => setShowCart(false)} />

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>Products</h2>
          <p style={{ color: '#666' }}>Fresh organic products for your healthy lifestyle</p>
        </div>

        {/* Boutons catégories */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {[{ k: 'all', l: 'Miels' }, { k: 'parfum', l: 'Produits Apicoles' }, { k: 'autres', l: 'Autres Produits' }].map(f => (
            <button
              key={f.k}
              onClick={() => setFilter(f.k)}
              style={{
                backgroundColor: '#6A4E23',
                color: '#fff',
                border: 'none',
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                borderRadius: '8px'
              }}
            >
              {f.l}
            </button>
          ))}
        </div>

        {/* Produits */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {products.map(p => (
            <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
          ))}
        </div>
      </section>

      <FooterSmall />
    </div>
  );
}
