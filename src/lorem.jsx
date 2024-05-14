import React from 'react';
import image from './assets/girl studying-2.svg'

function lorem() {
  return (
    <div className='M-section1'>
        <img src={image} alt="" />
        <div className="lorem-container">
            <h3>
                Lorem ipsum dolor sit amet
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam quis justo ac justo mattis volutpat non sit amet dolor.
              Sed gravida, sapien sit amet tristique tempor, ante dolor suscipit
              nisi, non pulvinar felis felis vel mi. Proin vitae sapien 
              id justo faucibus placerat. Pellentesque habitant morbi tristique 
              senectus et netus et malesuada fames ac turpis egestas. Integer sed 
              vestibulum ipsum. Vestibulum ante ipsum primis in faucibus orci luctus 
              et ultrices posuere cubilia curae; Sed ac nisi ultricies, cursus odio 
              non, sagittis urna. Integer consequat ipsum vitae justo laoreet, nec 
              molestie nisl molestie.
            </p>
        </div>
    </div>
  );
}

export default lorem;