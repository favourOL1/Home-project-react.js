import React from "react"
import images from "../assets/Airport.jpg"

function OurServices (props){

    return(
        <div className="Ourservice container ">
            <div>
                <img src={images} alt="" />
                <p>{props.service}</p>
            </div>
            <div>
                <img src={images} alt="" />
                <p>{props.service}</p>
            </div>
            <div>
                <img src={images} alt="" />
                <p>{props.service}</p>
            </div>
            
        </div>
    );
}

export default OurServices