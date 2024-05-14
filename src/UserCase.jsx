import React from "react";
import image from './assets/studyig girl.svg'

function UserCase(){
    return(
        <div className="UserCase">
          <div className="block">
           <div className="block1">
             <h3>By <br /> UseCase</h3>
             <p>Use Case 1</p>
             <p>Use Case 1</p>
             <p>Use Case 1</p>
             <p>Use Case 1</p>
           </div>
           <div className="block2">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Nullam quis justo ac justo mattis volutpat non sit amet 
                 dolor. Sed gravida, sapien sit amet tristique tempor, ante dolor suscipit nisi, 
                 non pulvinar felis felis vel mi. Proin vitae sapien id justo faucibus placerat.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                turpis egestas. Integer sed vestibulum ipsum. Vestibulum ante ipsum primis in 
                faucibus orci luctus et ultrices posuere cubilia curae; Sed ac nisi ultricies,
                cursus odio non, sagittis urna. Integer consequat ipsum vitae justo laoreet, 
                nec molestie nisl molestie.
             </p>
             <img src={image} alt="" />
           </div>
          </div>
        </div>
    );
}

export default UserCase;