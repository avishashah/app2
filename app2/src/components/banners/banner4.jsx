import React from "react";
import Banner from '../../resources/images/banner44.jpeg';

export default function banner4() {
  return (
    <div>
      <div className="banner-img-custom">
       
        <div className="row">
        <div className="col-6">
        <div className="banner-heading">
          <h3 style={{ color: "white" }}>
            <p>
              We are helping for <br />
              <strong>25 Years</strong> to helpless <br /> people and bringing a{" "}
              <br /> smile around the world
            </p>
          </h3>
          <button
            className="btn btn-outline-light"
            style={{ borderRadius: "30px" }}
          >
            BECOME VOLUNTEER
          </button>
        </div>
        </div>
         
        <div className="col-6">
        <div className="banner-icons">
        <p><i style={{color:"white", width:"150px"}}class="fas fa-trophy fa-5x" ></i> <i style={{color:"white", width:"150px"}} class="fas fa-users fa-5x"></i> <i style={{color:"white"}}  class="fas fa-layer-group fa-5x"></i></p>
        <h3 style={{color:"whitesmoke"}}> &nbsp;&nbsp;&nbsp;&nbsp;59 &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 3125 &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;397 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h3>
        <h6 style={{color:"whitesmoke"}}>&nbsp;&nbsp;&nbsp;AWARDS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VOLUNTEERS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS</h6>
        </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}
