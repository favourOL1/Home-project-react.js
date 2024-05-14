import React from "react";

function Box (){

    const link1 = {
        title: "Choose A Car",
        description : "View our range of cars, find your perfect car for the coming days"
    }

    const link2 = {
        title:"Come In Contact",
        description:"Our advisor team is ready to help you with the booking process"
    } 

    const link3 = {
        title:"Enjoy Driving",
        description:"Receive the key and enjoy your car. We treat all our cars with respect"
    }

    return(
        <div className="boxs container">
            <div className="box_link" >
                <h1>{link1.title} </h1>
                <p>{link1.description}</p>
            </div>
            <div className="box_link">
                <h1>{link2.title} </h1>
                <p>{link2.description}</p> 
            </div>
            <div className="box_link">
               <h1>{link3.title}</h1> 
               <p>{link3.description}</p>
            </div>
        </div>
    );
}

export default Box

  /* 1



2



3

. */

