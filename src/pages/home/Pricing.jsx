import React from 'react';
import pricing1 from "../../assets/images/hosting-basic.png"
import pricing2 from "../../assets/images/hosting-advanced.png"
import pricing3 from "../../assets/images/hosting-professional.png"
// import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing position-relative py-5" id="pricing">
      <h2 className="special-heading text-center mb-5">PRICING</h2>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="box bg-white text-center shadow position-relative pb-2">
              <div className="title fw-bold my-4 fs-4" data-aos="fade-up">Basic</div>
              <img src={pricing1} alt="" className="mb-3" data-aos="fade-up"/>
              <div className="info mb-4">
                <span className="price d-block fw-bold" data-aos="fade-up">$15</span>
                <span className="time d-block text-muted mt-1" data-aos="fade-up">Per Month</span>
              </div>
              <ul className="list-unstyled text-start">
                <li className="p-3 border-top" data-aos="fade-up">10GB HDD Space</li>
                <li className="p-3 border-top" data-aos="fade-up">5 Email Addresses</li>
                <li className="p-3 border-top" data-aos="fade-up">2 Subdomains</li>
                <li className="p-3 border-top" data-aos="fade-up">4 Databases</li>
                <li className="p-3 border-top" data-aos="fade-up">Basic Support</li>
              </ul>
              <a href="#" className="btn-custom d-block mx-auto my-4 text-decoration-none fw-bold rounded" data-aos="fade-up">
                Choose Plan
              </a>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="box popular bg-white text-center shadow position-relative pb-2">
              <div className="label position-absolute fw-bold text-white" data-aos="fade-up">Most Popular</div>
              <div className="title fw-bold my-4 fs-4" data-aos="fade-up">Advanced</div>
              <img src={pricing2} alt="" data-aos="fade-up" className="mb-3" />
              <div className="info mb-4">
                <span className="price d-block fw-bold" data-aos="fade-up">$25</span>
                <span className="time d-block text-muted mt-1" data-aos="fade-up">Per Month</span>
              </div>
              <ul className="list-unstyled text-start">
                <li className="p-3 border-top" data-aos="fade-up">20GB HDD Space</li>
                <li className="p-3 border-top" data-aos="fade-up">10 Email Addresses</li>
                <li className="p-3 border-top" data-aos="fade-up">5 Subdomains</li>
                <li className="p-3 border-top" data-aos="fade-up">8 Databases</li>
                <li className="p-3 border-top" data-aos="fade-up">Advanced Support</li>
              </ul>
              <a href="#" className="btn-custom d-block mx-auto my-4 text-decoration-none fw-bold rounded" data-aos="fade-up">
                Choose Plan
              </a>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="box bg-white text-center shadow position-relative pb-2">
              <div className="title fw-bold my-4 fs-4" data-aos="fade-up">Professional</div>
              <img src={pricing3} alt="" className="mb-3" data-aos="fade-up"/>
              <div className="info mb-4">
                <span className="price d-block fw-bold" data-aos="fade-up">$45</span>
                <span className="time d-block text-muted mt-1" data-aos="fade-up">Per Month</span>
              </div>
              <ul className="list-unstyled text-start">
                <li className="p-3 border-top" data-aos="fade-up">50GB HDD Space</li>
                <li className="p-3 border-top" data-aos="fade-up">20 Email Addresses</li>
                <li className="p-3 border-top" data-aos="fade-up">10 Subdomains</li>
                <li className="p-3 border-top" data-aos="fade-up">20 Databases</li>
                <li className="p-3 border-top" data-aos="fade-up">Professional Support</li>
              </ul>
              <a href="#" className="btn-custom d-block mx-auto my-4 text-decoration-none fw-bold rounded" data-aos="fade-up">
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;