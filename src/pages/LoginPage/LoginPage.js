import React from 'react'
import './LoginPage.scss'
import {IoIosArrowForward} from 'react-icons/io'

const LoginPage = () => {
    return (
        <div className="loginPage">
            <div className="loginPage__background">
                <img className="loginPage__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo" />
                <button className="loginPage__button">Sign In</button>
                <div className="loginPage__gradient" />
            </div>    
            <div className="loginPage__body">
                <>
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="loginPage__body__input">
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <button className="loginPage__body__input__getStarted">Get Started<IoIosArrowForward style={{ paddingTop: "5px" }}/></button>
                    </form>
                </div>
                </>
            </div>        
        </div>
    )
}

export default LoginPage
