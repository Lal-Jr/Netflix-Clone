import React from 'react'
import './SignIn.scss'

const SignIn = () => {
    return (
        <div  className="signin">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
                <h4><span className="signin__gray">New to Netflix?</span> Sign Up Now</h4>
            </form>
        </div>
    )
}

export default SignIn
