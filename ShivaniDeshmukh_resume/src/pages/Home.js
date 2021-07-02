import IntroSection from "../Components/IntroSection"
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";

const Home = () => {
    return (
        <div>
            <IntroSection/>
            <About/>
            <Experience/>
            <Contact/>
        </div>
    )
}
export default Home;
