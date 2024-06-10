import React from "react"
import image1 from '../assets/horse.png'
import image2 from '../assets/king.png'
import image3 from '../assets/lambo.png'
import image4 from '../assets/landRover.png'
import image5 from '../assets/mini.png'
import image6 from '../assets/pourse.png'


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
        <footer className="container">
            <div className="Footer ">
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
            <div className="carBrand"> 
                <a href=""> <img src={image1} alt="" /></a>
                <a href=""><img src={image2} alt="" /></a>
                <a href="">  <img src={image3} alt="" /></a>
                <a href=""><img src={image4} alt="" /></a>
                <a href="">  <img src={image5} alt="" /></a>
                <a href="">  <img src={image6} alt="" /> </a>
            </div>
            <div className="lastside">
                <div className="line"></div>
                <p>&copy; {new Date().getFullYear()} Favour OL React-website. All right reserved</p>
            </div>
        </footer>
    );
}

export default Footer