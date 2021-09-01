import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
	const user = null; 
	return (
		<div className="app">
			<Router>
				{!user ? (
					<LoginPage />
					):(
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
};

export default App;
