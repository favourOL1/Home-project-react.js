import React from "react"


function Footer ( ) {


    const contact = {
        call: "Call us",
        call2: "08067749154",
        mail: "Mail us",
        mail2: "mflavihno@gmail.com",
        address: "Address",
        address2: "Dubia, Office123"
    }

    return (
        <div className="Footer container">
            <div id="footer">
                <h6>{contact.call}</h6>
                <p>{contact.call2}</p>
            </div>
            <div id="footer">
                <h6>{contact.mail}</h6>
                <p>{contact.mail2}</p>
            </div>
            <div id="footer">
                <h6>{contact.address}</h6>
                <p>{contact.address2}</p>
            </div>
        </div>
    );
}

export default Footer