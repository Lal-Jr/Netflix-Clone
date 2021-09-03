import React, { useState } from "react";
import "./LoginPage.scss";
import { IoIosArrowForward } from "react-icons/io";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const LoginPage = () => {
	const [signIn, setSignIn] = useState(false);
	const [signUp, setSignUp] = useState(false);

	return (
		<div className="loginPage">
			<div className="loginPage__background">
				<img
					className="loginPage__logo"
					src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
					alt="Netflix Logo"
					onClick={()=> window.location.reload(true)}
				/>
				<button
					className="loginPage__button"
					onClick={() => setSignIn(true)}
				>
					Sign In
				</button>
				<div className="loginPage__gradient" />
			</div>
			<div className="loginPage__body">
				{!(signIn || signUp) ? (
					<>
					<h1>Unlimited movies, TV shows and more.</h1>
					<h2>Watch anywhere. Cancel anytime.</h2>
					<h3>
						Ready to watch? Enter your email to create or
						restart your membership.
					</h3>
					<div className="loginPage__body__input">
						<form>
							<input
								type="email"
								placeholder="Email Address"
							/>
							<button
								className="loginPage__body__input__getStarted"
								onClick={() => setSignUp(true) && setSignIn(false)}
							>
								Get Started
								<IoIosArrowForward
									style={{ paddingTop: "5px" }}
								/>
							</button>
						</form>
					</div>
				</>
					
				) : (
					(signIn && <SignIn />) ||
					(signUp && <SignUp />)
				)}
			</div>
		</div>
	);
};

export default LoginPage;
