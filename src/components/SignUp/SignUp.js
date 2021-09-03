import React, { useRef, useState } from "react";
import { auth } from "../../firebase";
import SignIn from "../SignIn/SignIn";
import "./SignUp.scss";
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
	const [show,setShow] = useState(false);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		e.preventDefault();

		auth.createUserWithEmailAndPassword(
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<> { show ? <SignIn /> : 
			<div className="signup">
			<form>
			<h1>Sign Up</h1>
			<input
				ref={emailRef}
				type="email"
				placeholder="Email Address"
			/>
			<input
				ref={passwordRef}
				type="password"
				placeholder="Password"
			/>
			<button type="submit" onClick={register}>Sign Up</button>
			<button type="submit" className="signup__google">
				<FcGoogle style={{ marginBottom: "-2px", marginRight:"5px" }}/>Sign Up With Google
			</button>
			<h4>
				<span className="signup__gray">Already a User? </span>
				<span className="signup__link" onClick={() => setShow(true)}>
					Sign In Now.
				</span>
			</h4>
			</form>
		</div>
		}</>
	)
};

export default SignUp;
