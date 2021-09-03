import React, { useEffect, useRef, useState } from "react";
import { auth } from "../../firebase";
import SignIn from "../SignIn/SignIn";
import "./SignUp.scss";

const SignUp = () => {
	const [show,setShow] = useState(false);
	const [ pass, setPass] = useState("");
	const [ repass, setRePass] =useState("");
	const [ disabled, setDisabled] =useState(false);
	const [ match, setMatch] = useState("");
	const [ value, setValue] = useState(false);
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

	useEffect(() => {
		if(pass===repass){
			setDisabled(false);
			setMatch("are same");
		}
		else {
			setDisabled(true);
			setMatch("are different");
		}

		if(repass.length > 0){
			setValue(true);
		}
	},[setDisabled,pass,repass])

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
				onChange={e => setPass(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Re-Enter Password"
				onChange={e => setRePass(e.target.value)}
			/>
			<div className={value ? "visible" : "hidden"}>
			<p className={disabled ? "signup__red": "signup__green"}>Passwords {match}</p>
			</div>
			<button className={disabled ? "signup__buttonDisabled": "signup__button"}type="submit" onClick={register} disabled={disabled}>Sign Up</button>
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
