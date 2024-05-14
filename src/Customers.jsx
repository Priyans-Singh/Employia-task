import React from "react";
import image1 from "./assets/CMOLTD.png"
import image2 from "./assets/Torq.png"
import image3 from "./assets/Unicorn.png"
import image4 from "./assets/fly.png"
import image5 from "./assets/goodmind.png"
import image6 from "./assets/hacking school.png"
import image7 from "./assets/reform.png"
import image8 from "./assets/zz.png"

function Customers(){
    const images=[image1,image2,image3,image4,image5,image6,image7,image8];
    return(
        <div className="customers">
            <h2>Our Customers</h2>
            <button></button>
            <p>Empowering seamless recruitment experiences for our valued customers.</p>
             <div className="slider-container">
                <div className="slider">
                    {images.map((i) => {
                        return (
                            <img src={i} />
                        );
                    })}
                    {images.map((i) => {
                        return (
                            <img src={i} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Customers;