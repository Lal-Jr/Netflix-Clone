import React, {useState, useEffect} from 'react'
import './Navbar.css'

const Navbar = () => {
    const [show,handleShow] = useState(false);

    const transitionNavbar = () =>{
        if(window.scrollY >= 100)
            handleShow(true);
        else
            handleShow(false);
        
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar)
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img className="nav__logo" src="https://assests.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo"/>
                <img className="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/h8Ee3tdn_400x400.png" alt="Avatar Icon"/>
            </div>
         </div>
    )
}

export default Navbar;
