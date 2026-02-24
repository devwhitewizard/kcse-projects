import React from "react";
import "../css/Shop.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Complete Azani ISP Project (2026)",
      price: 3500,
      discount: "20% OFF",
      description: "Fully developed Azani Internet Service Provider system",
      features: ["Source code", "Database", "Documentation", "Support"]
    },
    {
      id: 2,
      name: "Victory School Membership System (2025)",
      price: 2500,
      discount: "20% OFF",
      description: "Complete school membership management system",
      features: ["Source code", "Database", "Documentation", "Support"]
    }
  ];

  return (
    <div>
      <Navbar />
      <section className="shop">
        <h1>KCSE Project Solutions</h1>
        <p className="subtitle">Get fully done project work at 20% discount - Limited time offer!</p>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="discount-badge">{product.discount}</div>
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <ul className="features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <p className="price">KSh {product.price}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
