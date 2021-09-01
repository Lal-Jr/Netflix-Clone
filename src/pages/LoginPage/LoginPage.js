import React from 'react'
import './LoginPage.scss'

const LoginPage = () => {
    return (
        <div className="loginPage">
            <div className="loginPage__background">
                <img className="loginPage__logo" src="https://assests.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo" />
                <button className="loginPage__button">Sign In</button>
                <div className="loginPage__gradient" />
            </div>    
            <div className="loginPage__body">
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="loginPage__body__input">
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <button className="loginPage__body__input__getStarted">GET STARTED</button>
                    </form>
                </div>
                </>
            </div>        
        </div>
    )
}

export default LoginPage
