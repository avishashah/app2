import React from 'react'
import Img from '../../resources/images/transparent.png'

export default function ContactUs() {
    return (
        <div>
            <div className="row custom-misc-2-con-chart"style={{position:'relative'}}>
                <div className="col-6">
                    <h1>
                        GET IN TOUCH
                        <br />
                        <strong> CONTACT US</strong>
                    </h1>
                    <div className="line2"></div>
                    <form action="">
                        <div className="row p-2">
                            <div className="col-6">
                                <span className="form-icon">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="Full Name" />
                                </span>
                                
                            </div>
                            <div className="col-6">
                                <span className="form-icon">
                                <i class="fas fa-envelope"></i>
                                <input type="email" name="" id=""  placeholder="Email"/>
                                </span>
                                
                            </div>

                   </div>
                   <div className="row p-2">
                   <div className="col-6">
                       <span className="form-icon">
                       <i class="fas fa-home"></i>
                       <input type="text" placeholder="Address" />  
                       </span>
                                
                            </div>
                            <div className="col-6">
                                <span className="form-icon">
                                <i class="fas fa-phone-alt"></i>
                                <input type="tel" placeholder="Phone" />
                                </span>
                                
                            </div>
                     
                   </div>

                        <div className="row p-2">
                            <div className="col-12">
                                <textarea name="" id="" style={{width:"100%"}} placeholder="Details"></textarea>
                            </div>
                            <div className="col-12">
                            <button className="btn btn-primary pill" type="submit">SEND NOW</button> 
                            </div>
                            
                        </div>

                        {/* <label htmlFor=""></label> <input type="text" /> */}
                        
                    </form>
                </div>
                <img src={Img} alt="" className="transparent-kid"/>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                

            </div>
        </div>
    )
}
