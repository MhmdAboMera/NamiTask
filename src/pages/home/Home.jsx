import AboutUs from "./AboutUs";
import ContactForm from "./contactForm";
import Features from "./Features";
import Landing from "./Landing";
import Pricing from "./Pricing";
import '../../style/home.css'
export default function Home(){
    return(
        <> 
       <Landing/>
       <AboutUs/>
       <Features/>
       <Pricing/>
       <ContactForm/>
        </>
    )
}