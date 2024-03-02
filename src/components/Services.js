// src/components/Services.js
import React from 'react';
import './services.css'; 
import SupportIcon from '../images/icons/support.png';
import ClaimIcon from '../images/icons/money.png'
import SecurityIcon from '../images/icons/security.png'
import EditIcon from '../images/icons/edit.png'

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="row">
          {/* Service Block 1 */}
          <div className="col-md-6 col-lg-3 mb-4 text-center">
            <img src={SupportIcon} alt="Support Icon" className="service-icon" />
            <h4 className="mt-4 fw-normal text-200">Support</h4>
            <p className="text-400 mb-md-0">Client is our most important priority</p>
          </div>
          
          {/* Service Block 2 */}
          <div className="col-md-6 col-lg-3 mb-4 text-center">
            <img src={EditIcon} alt="Claim System Icon" className="service-icon" />
            <h4 className="mt-4 fw-normal text-200">Easy Claim System</h4>
            <p className="text-400 mb-md-0">Express your desires and needs to us</p>
          </div>

          {/* Service Block 3 */}
          <div className="col-md-6 col-lg-3 mb-4 text-center">
            <img src={ClaimIcon} alt="Installments Icon" className="service-icon" />
            <h4 className="mt-4 fw-normal text-200">Easy Installments</h4>
            <p className="text-400 mb-md-0">It's quick, safe, and simple.</p>
          </div>

          {/* Service Block 4 */}
          <div className="col-md-6 col-lg-3 mb-4 text-center">
            <img src={SecurityIcon} alt="Security Icon" className="service-icon" />
            <h4 className="mt-4 fw-normal text-200">Strongly Secured</h4>
            <p className="text-400 mb-md-0">Your safety is our priority.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
