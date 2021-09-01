import React from "react";
import Banner from "../../resources/images/bannerr5.jpg";

export default function banner5() {
  return (
    <div>
      <br />
      <br />
      <div className="banner5-img-custom">
        <div className="row">
          <div className="col-6">
            <div className="banner5-heading">
              <h3 style={{ color: "white" }}>
                <p>
                  <h1>#EVENTS</h1> 
                  <h4 style={{color:"#02b24f"}}>Charity Drift</h4> 
                  <h6>We conduct various charity events <br /> known as <strong>Charity Drift</strong> to raise the <br /> funding and help as many needy people <br /> and children we can.</h6>
                  <h6><a style={{color:"white"}} href="#">Read More</a></h6>
                </p>
              </h3>
            </div>
          </div>

          <div className="col-6">
          <div className="banner5-right">
                  <h2><strong>Upcoming</strong> <strong className="gtext">Events</strong>  </h2>
                  <div className="line2"></div>
                  <h6>We try to conduct charity events every month or two. <br /> The latest events that we will be conducting are listed below.</h6>
              </div>

             <div className="row">
               <div className="col-2">
              
                  <div className="banner5-box1">
                  <center><h5 style={{color:"white"}}><strong>02</strong></h5></center>
                  <h6 style={{color:"white"}}><strong>AUG</strong></h6>
                  </div>
                </div>
                <div className="col-4">
                    <div className="banner5-right1"><h5>Spirit of Giving.</h5><h6>Charity brings to life again those who are spiritually dead. 
                        We donate food supplies to those who feels the hunger.
                        <br /><em className="gtext">VENUE: </em>Secondary school, Bhyander, Thane-401101</h6></div>
                  

                </div>

                  
    
              
              
              </div>
             
             <div className="banner5-box2">

             <center><h5 style={{color:"white"}}><strong>25</strong></h5></center>
                  <h6 style={{color:"white"}}><strong>AUG</strong></h6>
             </div>
            <div className="col-4">
                <div className="banner5-right2"><h5>Fraggers for a better Tomorrow.</h5><h6>Charity makes no decrease in property.We donate books to childrens who are desparate to seek knowledge.
                    <br /><em className="gtext">VENUE: </em>Government school, Chandwad, Nashik-423101</h6></div>
                  

            </div>
            </div>

        </div>
      </div>
    </div>
  );
}
