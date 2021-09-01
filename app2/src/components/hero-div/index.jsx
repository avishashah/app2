import React from 'react'
import Hero from "../../resources/images/hero.jpeg"

export default function Main() {
    return (
        <div className="hero-img-custom">
            <div className="hero-heading">
                <h1>
                    Be the <br />
                <strong>CHANGE</strong>

                </h1>

                <button className="btn btn-outline-dark" style={{borderRadius:"30px"}} > GET STARTED</button>
            </div>

    <div className="hero-footer">

<div className="row">
<div className="col-1">
    <div className="hero-text">
             <h1>01</h1>
        </div> 
    </div>

    <div className="col-2">
<h5 className="text-center">Education is moment from darkness to light.</h5>
</div>
<div className="col-1">
    </div>

    <div className="col-1">
    <div className="hero-text">
             <h1>02</h1>
        </div>
    </div>

    <div className="col-2">

<h5 className="text-center">Giving isn't about making a donation. Its about making a difference.</h5>
</div>
<div className="col-1">
    </div>
    <div className="col-1">
        <div className="hero-text">
             <h1>03</h1>
        </div>
   
    </div>
    
    <div className="col-2">
<h5 className="text-center">Water is the driving force of all nature. If there is no water there is no life.</h5>
</div>
</div>


</div> 
            </div> 

        
    )
}