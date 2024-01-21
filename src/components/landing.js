import "./landing.css"
import { NavLink } from "react-router-dom"
import mainImage from "./images/lens-1418954.png"



const Landing = () => {
    return (
        <div className="wrapper">
            <div className="w2">
        <div className="landingpage">

            <div className="welcomeimage">
                <img height="100%" width="100%" src={mainImage} alt="Image" />
            </div>


            <div className="welcome">
                <h1>Welcome to InstaShare</h1>
                <NavLink to="/allpost"> <button>Enter</button></NavLink>

            </div>
            </div>
            </div>
        </div>
    )
}
export default Landing