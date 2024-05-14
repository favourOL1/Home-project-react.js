// import Car from "../images/Car.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown,faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import CarVideo from "../media/fastcarsng.mp4"
import Box from './Box'
import Section1 from '../Sections/Section1'

function HeroSection (){

    const signIn = "Sign In"

    const signUp = "Sign Up"
    
    return(
        
        <div className='hero-section'>  
                <div className="overlay container"></div>

                <div className='register container'>
                    <div>
                        <h6 className='crown'><FontAwesomeIcon icon={faCrown} /> PREMIUM</h6>
                        <h1> Register Now! </h1>
                    </div>
                    <em> and Join the <b>VIPs</b></em>
                    <div id='btn_link'>
                        <a href="#"><button>{signIn} <FontAwesomeIcon icon={faArrowTrendUp}/> </button></a>
                        <a href="#"><button >{signUp} <FontAwesomeIcon icon={faArrowTrendUp}/> </button></a>
                    </div>
                </div>
                <video src={CarVideo} autoPlay muted width={"100%"} ></video>
        
        </div>
    )
}
export default HeroSection