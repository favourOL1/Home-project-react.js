import React from "react"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import Dropdown from "./dropdown"



function Navbar () {
    return(
      <>
      <nav className="container">
        <div className="name">
          <h2><em>FAST</em>CARS</h2>
          <h5>"................<em>Fast Progress to luxury life</em>"</h5>
        </div>
        <div className="heads">
   

          <Dropdown link= "HOME"/>
          <Dropdown link= "ABOUT"/>
          <Dropdown 
            link= "SERVICE" 
            items={[
              {name: "car", link: "cars"},
              {name: "repair", link: "cars"}
              ]
            }/>
          <Dropdown link= "PAGES"/>
          <Dropdown link= "CONTACT"/>

          
          <div className="contact">
            <FontAwesomeIcon icon={faPhoneVolume} className="fa"/>
            <div>
              <p>Need help?</p>
              <a href="#" >8067749154</a>
            </div>
          </div>
        </div>

      </nav>
      </>

    )
}
 export default Navbar