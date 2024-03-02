// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="row">
          {/* Left Column: Text */}
          <div className="col-md-6">
            <h1>We provide the best value insurance</h1>
            <p>Simple Steps You Can Take to Improve Your Financial Well-Being for the rest of Your Life</p>
          </div>
          {/* Right Column: Get Quote Form */}
          <div className="col-md-6">
            <div className="get-quote-form">
              <h2>Get a Quote</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="name@example.com" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="Phone" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="category">Insurance Category</label>
                  <input type="text" id="category" name="category" placeholder="Insurance Category" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="comments">Comments</label>
                  <textarea id="comments" name="comments" placeholder="Leave a comment here" className="form-control"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Get Quote</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
