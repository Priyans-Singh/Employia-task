import React from 'react';
import image from './assets/thinking.svg';
import arrow from './assets/arrow.svg'

function questions() {
  return (
    <div className="faq">
        <div className="q-container">
         <div className='left-side'>
            <h2>Your Questions? <br />
              <span>Our solutions!</span> 
            </h2>
            <div className="answers">
                <div className="questions">
                    <p>Lets help you figure out what?</p>
                    <img src={arrow} alt="" />
                </div>
                <div className="questions">
                    <p>Lets help you figure out what?</p>
                    <img src={arrow} alt="" />
                </div>
                <div className="questions">
                    <p>Lets help you figure out what?</p>
                    <img src={arrow} alt="" />
                </div>
                <div className="questions">
                    <p>Lets help you figure out what?</p>
                    <img src={arrow} alt="" />
                </div>
                <div className="questions">
                    <p>Lets help you figure out what?</p>
                    <img src={arrow} alt="" />
                </div>
             </div>
             <p>Havent seen yours? <span>ask one</span></p>
         </div>
         <div className="right-side">
            <img src={image} alt="" />
         </div>
        </div>
    </div>
  )
}

export default questions