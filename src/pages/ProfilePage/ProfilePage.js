import React from "react";
import "./ProfilePage.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

const ProfilePage = () => {
	const user = useSelector(selectUser);
	return (
		<div className="profilePage">
			<Navbar />
			<div className="profilePage__body">
				<h1>Edit Profile</h1>
				<div className="profilePage__body__info">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
						alt="avatar"
					/>
					<div className="profilePage__body__info__details">
						<h2>{user.email}</h2>
						<div className="profilePage__body__info__details__plans">
							<h3>Plans (Current Plan: Premium)</h3>
						</div>
						<button
							onClick={() => auth.signOut()}
							className="profilePage__body__info__details__signOut"
						>
							Sign Out
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
