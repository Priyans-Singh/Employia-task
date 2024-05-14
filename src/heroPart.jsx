import React from "react";
import './index.css';
import logo from './assets/logo.svg'
import asset1 from './assets/Group 9067.png'
import logoName from'./assets/Employia.svg'

function heroPart() {
    return (
      <div className="heroSection">
         <div className="name">
           <div classname='logo'>
             <img src={logo} alt="Logo and company name" />
             <img src={logoName} alt="Logo and company name" />
           </div>
           <button>Log In</button>
         </div>
        <h2 className="SP">World's First Candidate <br />Tracking system</h2>
        <p>Check with our CTS whether you should HIRE or NOT!</p>
        <button>Join Waitlist</button>
        <img src={asset1} alt="Client asset" />
      </div>
    );
  }
  
  export default heroPart;