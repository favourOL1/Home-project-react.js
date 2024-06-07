import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import OurServices from "../component/OurServices";

function Section2 (){

    const service = {
        row1: "WHAT WE DO",
        row2: "OUR SERVICE"
    }

    return(
        <div className="Section2">
            <div className="stn2">
                <FontAwesomeIcon icon={faGripLinesVertical} color="red" />
                <h6>{service.row1}</h6>
                <h1>{service.row2}</h1>
            </div>
            <div>
                <OurServices service = "Airport Transfer"/>
            </div>
           
        </div>
    );
}

export default Section2