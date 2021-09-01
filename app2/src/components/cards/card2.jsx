import React from 'react'
import Cards from './component/cards'
import Img1 from "../../resources/images/eg22.jpg";
import Img2 from "../../resources/images/eg5.jpg"
import Img3 from "../../resources/images/eg11.jpg";

export default function Card2() {


    var array1 = [
        {
        link:Img1,
        title:"KARNATAKA",
        des:"Donated 2000 textbooks to government schools. Mission accomplished. Respect++ Respect Status: ",
        val:73

    },
        {link:Img2,
        title:"MANIPUR",
        des: "Donated 500 clothes to needy people.  Mission accomplished. Respect++ Respect Status: ",
        val:75

    },
        {link:Img3,
        title:"ASSAM",
        des: "Financially supported a few families. Mission accomplished. Respect++ Respect Status: ",
        val:89


    },

    ]
  
    return (
        <div>
            <div className="row">
                <div className="col-12">
                <div className="d-flex">
{array1.map(ok=><Cards {...ok} /> )}




                </div>

                </div>
            </div>
            
        </div>
        
    )
}