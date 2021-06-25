// import imgl from "resume\src\images\profile.jpg";
import Profilepic from "./Profilepic"
import Name from "./Name"
import Education from "./Education"
import Training from "./Training"

const Header = () => {
  return (
    <div className="column">
      <Name />
      <Education />
      <Training />
    </div>
  )
}

export default Header
