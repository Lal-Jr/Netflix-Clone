import React, { useRef, useState } from "react";
import { auth, provider } from "../../firebase";
import SignUp from "../SignUp/SignUp";
import "./SignIn.scss";
import { FcGoogle } from 'react-icons/fc'


const SignIn = () => {
	const [ show, setShow] = useState(false)
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const googleSignIn = (e) => {
		e.preventDefault();
		auth.signInWithPopup(provider);
	}

	const signIn = (e) => {
		e.preventDefault();

		auth.signInWithEmailAndPassword(
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<> { show ? <SignUp/> : 
			<div className="signin">
			<form>
				<h1>Sign In</h1>
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
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<button type="submit" className="signin__google" onClick={googleSignIn}>
					<FcGoogle style={{ marginBottom: "-2px", marginRight:"5px" }}/>Sign In With Google
				</button>
				<h4>
					<span className="signin__gray">New to Netflix? </span>
					<span className="signin__link" onClick={() => setShow(true)}>
						Sign Up Now.
					</span>
				</h4>
			</form>
		</div>
		}</>
	);
};

export default SignIn;
