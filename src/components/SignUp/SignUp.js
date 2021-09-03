import React from 'react'
import './SignUp.scss'

const SignUp = () => {
    return (
        <div  className="signup">
            <form>
                <h1>Sign Up </h1>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Re-Enter Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
