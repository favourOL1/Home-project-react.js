import image from "../assets/about.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import Button from "../component/Button"

function Section1 (){
    const company = {
        header1 : "We Are More Than",
        header2: "A Car Rental Company",
        text: "Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa nutodio in the miss volume place urna lacinia eros nunta urna mauris vehicula rutrum in the miss on volume interdum."
    }

    const typesOfCars = {
        num1: "Sport Cars",
        num2: "Luxury Car"
    }

    return(
        <div className="company-about container">
            <div className="section1">
                <h1>FAST<em color="red">CARS</em></h1>
                <h1>{company.header1}</h1>
                <h2>{company.header2}</h2>
                <p>{company.text}</p>
                <div className="typesofcars">
                    <p><FontAwesomeIcon icon={faCircleCheck} color="red"/> {typesOfCars.num1}</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} color="red"/> {typesOfCars.num2}</p>
                    <Button name = "Read More"/>
                </div>
            </div>
            <div className="img-about">
                <img src={image} alt="img"  width={"80%"}/>
            </div>
        </div>
    );
}

export default Section1