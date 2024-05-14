import image from "../assets/about.jpg"


function Section1 (){
    const company = {
        header1 : "We Are More Than",
        header2: "A Car Rental Company",
        text: "Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa nutodio in the miss volume place urna lacinia eros nunta urna mauris vehicula rutrum in the miss on volume interdum."
    }
    return(
        <div className="company-about container">
            <div className="section1">
                <h1>FAST<em color="red">CARS</em></h1>
                <h1>{company.header1}</h1>
                <h2>{company.header2}</h2>
                <p>{company.text}</p>
            </div>
            <div className="img-about">
                <img src={image} alt="img"  width={"80%"}/>
            </div>
        </div>
    );
}

export default Section1