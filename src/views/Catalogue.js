
import React, { useState } from 'react';
import SiteNavbar from "components/Navbars/SiteNavbar";
import FooterSmall from "components/Footers/FooterSmall.js";

const ProductCard = ({ product, onAddToCart }) => {
  const [hover, setHover] = useState(false);
  
  return (
    
    <div 
      style={{ backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.1)', position: 'relative' }}
      
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      
      <div style={{ position: 'relative', height: '200px', backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {product.badge && (
          <span style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: product.badge === 'Sale' ? "black" : '#000', color: '#fff', padding: '5px 12px', fontSize: '12px', fontWeight: 'bold' }}>
            {product.badge}
          </span>
        )}
<img 
  src={product.image} 
  alt={product.name} 
  style={{ width: '140px', height: '140px', objectFit: 'contain' }}
/>        
        {hover && (
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <button style={{ backgroundColor: "black", border: 'none', padding: '8px', cursor: 'pointer', color: '#fff' }}>aa</button>
              <button style={{ backgroundColor: "black", border: 'none', padding: '8px', cursor: 'pointer', color: '#fff' }}>bb</button>
            </div>
            <button onClick={() => onAddToCart(product)} style={{ position: 'absolute', bottom: '10px', left: '10px', backgroundColor: "black", border: 'none', padding: '10px 20px', cursor: 'pointer', color: '#fff', fontWeight: 'bold' }}>
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <div style={{ padding: '15px', backgroundColor: '#f5f5f5ff' }}>
        <h4 style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>{product.name}</h4>
        <span style={{ backgroundColor: "black", color: '#fff', padding: '5px 12px', fontWeight: 'bold' }}>${product.price}</span>
      </div>
    </div>
  );
};

const Catalogue = ({ addToCart }) => {
  const [filter, setFilter] = useState('all');
  const products = [
    { id: 1, name: "Fresh Broccoli", price: "7.79", badge: "Sale", category: "best",image:"https://media.istockphoto.com/id/185239535/fr/photo/pot-de-miel-avec-%C3%A9tiquette-vierge-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=bGHnKIrrZQQ-woFX55FeBhjm8AgGCq2bV3-gVtYstWs=" },
    { id: 2, name: "Organic Apples", price: "9.79", badge: "New", category: "top",image:"https://media.istockphoto.com/id/185239535/fr/photo/pot-de-miel-avec-%C3%A9tiquette-vierge-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=bGHnKIrrZQQ-woFX55FeBhjm8AgGCq2bV3-gVtYstWs="},
    { id: 3, name: "Red Tomatoes", price: "10.79", badge: "Sale", category: "top" ,image:"https://media.istockphoto.com/id/185239535/fr/photo/pot-de-miel-avec-%C3%A9tiquette-vierge-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=bGHnKIrrZQQ-woFX55FeBhjm8AgGCq2bV3-gVtYstWs="},
    { id: 4, name: "Fresh Carrots", price: "15.79", badge: "Sale", category: "best",image:"https://media.istockphoto.com/id/185239535/fr/photo/pot-de-miel-avec-%C3%A9tiquette-vierge-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=bGHnKIrrZQQ-woFX55FeBhjm8AgGCq2bV3-gVtYstWs=" },
  ];
  
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  
  return (
    <div>
      <SiteNavbar/>
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>Products</h2>
        <p style={{ color: '#666' }}>Fresh organic products for your healthy lifestyle</p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {[{k:'all',l:'miels'}, {k:'top',l:'produits apicoles'}, {k:'best',l:'autres produits'},].map(f => (
          <button key={f.k} onClick={() => setFilter(f.k)} style={{ backgroundColor: filter === f.k ? '#000' : "black", color: '#fff', border: 'none', padding: '12px 30px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
            {f.l}
          </button>
        ))}
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {filtered.map(p => <ProductCard key={p.id} product={p} onAddToCart={addToCart}/>)}
      </div>
      
    </section>
    <FooterSmall />
    </div>

    
    
  );
};
export default Catalogue;
