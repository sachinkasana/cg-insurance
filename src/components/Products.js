// src/components/Products.js
import React from 'react';
import './Products.css'; // Import your CSS file for additional styling
import image from '../images/life-insurance.png';
import Services from './Services';

const Products = () => {
  return (
    <>
    <section className="products-section">
      <div className="container">
        <div className="row">
          {/* Left Column: Text */}
          <div className="col-md-6">
            <h2>Life Insurance</h2>
            <p>
              Make a plan for the emergence of life. We protect your most precious assets, allowing you to devote your time and energy to more essential things in life.
            </p>
            <p>
              Discover the most appropriate fit for you and your Family.
            </p>
          </div>
          {/* Right Column: Image */}
          <div className="col-md-6">
            <div className="img-container">
              {/* Add your image source here */}
              <img src={image} alt="Auto Insurance" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Services/>
    </>
  );
};

export default Products;
