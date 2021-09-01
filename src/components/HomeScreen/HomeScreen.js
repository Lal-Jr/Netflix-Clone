import React from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import "./HomeScreen.scss";

const HomeScreen = () => {
	return (
		<div className="homeScreen">
			<Navbar />
			<Banner />
		</div>
	);
};

export default HomeScreen;
