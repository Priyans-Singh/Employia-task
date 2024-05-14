import React from 'react';
import logo from './assets/logo-white.svg';
import text from './assets/text-white.svg';

function footer() {
  return (
    <div className='empty'>
        <div className="footer">
         <div className="tags">
          <div className="product">
            <h6>Product</h6>
            <p>Features</p>
            <p>Integrations</p>
            <p>Pricing</p>
          </div>
          <div className="resources">
            <h6>Resources</h6>
            <p>Content hub</p>
            <p>API Documentation</p>
          </div>
          <div className="company">
            <h6>Company</h6>
            <p>About us</p>
            <p>Contact us</p>
            <p>Partnerships</p>
            <p>Careers</p>
          </div>
          <div className="Legal">
            <h6>Legal</h6>
            <p>Terms & Conditions</p>
            <p>Privacy policy</p>
            <p>Refund policy</p>
          </div>
         </div>
         <h5>Made with ❤️ from india for the World</h5>
         <div className="brand">
            <img src={logo} alt="" />
            <img src={text} alt="" />
         </div>
         <p>Copyright © 2024 employia.ltd All rights reserved</p>
        </div>
    </div>
  );
}

export default footer;