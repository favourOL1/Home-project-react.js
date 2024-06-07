import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import React from "react"

function Button (props){


    return(
        <> 
            <a href="#">
                <button className="btn">
                    {props.name}  <FontAwesomeIcon icon={faArrowTrendUp}/>
                </button>
            </a>
            
        </>
    );
}

export default Button