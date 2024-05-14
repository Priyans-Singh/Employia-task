import React from 'react';
import image1 from'./assets/success.svg';
import image2 from'./assets/team.svg';

function C_Partner() {
  return (
    <div className='Partners'>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <h1>Grow with us as a partner</h1>
        <p>We reached here with our hardwork and dedication</p>
        <button>Get Started</button>
    </div>
  )
}

export default C_Partner;