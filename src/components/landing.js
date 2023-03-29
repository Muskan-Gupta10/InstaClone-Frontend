import "./landing.css"
import { NavLink } from "react-router-dom"
import mainImage from "./images/lens-1418954.png"



const Landing = () => {
    return (
        <div className="landingpage">

            <div className="welcomeimage">
                <img height="100%" width="100%" src={mainImage} alt="Image" />
            </div>


            <div className="welcome">
                <h1>welcome to 10x instaclone</h1>
                <NavLink to="/allpost"> <button>Enter</button></NavLink>

            </div>

        </div>
    )
}
export default Landing