// import Car from "../images/Car.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import CarVideo from "../media/fastcarsng.mp4"

function HeroSection (){
    return(
        
            
            <div id="hero">
                <div className="overlay container">
                    <h6 className='crown'><FontAwesomeIcon icon={faCrown} /> PREMIUM</h6>
                    <h1> Register Now! </h1>
                    <em>Join the team</em>
                    <div className="register">
                        <button>Log In</button>
                        <button >Sign Up</button>
                    </div>
                </div>
                <video src={CarVideo} autoPlay muted width={"100%"} ></video>
            </div>
        
    )
}
export default HeroSection