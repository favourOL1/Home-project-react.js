import React from "react"
import image1 from "../assets/Airport.jpg"
import image2 from "../assets/vipTransfer.jpg"
import image3 from "../assets/private.jpg"

function OurServices (props){

    return(
        <div className="Ourservice container ">
            <div>
                <img src={image1} alt="" />
                <p>{props.service1}</p>
            </div>
            <div>
                <img src={image2} alt="" />
                <p>{props.service2}</p>
            </div>
            <div>
                <img src={image3} alt="" />
                <p>{props.service3}</p>
            </div>
            
        </div>
    );
}

export default OurServices