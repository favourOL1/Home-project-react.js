
import Section1 from "./Sections/Section1"
import Section2 from "./Sections/Section2"
import Box from "./component/Box"
import Button from "./component/Button"
import Footer from "./component/Footer"
import HeroSection from "./component/HeroSection"
import Navbar from "./component/Navbar" 

function App(){
  return(
    <>

    <Navbar/>
    <HeroSection/>
    <Box/>
    <Section1 />
    <Section2/>
    <Footer/>
    </>
  )
}

export default App
