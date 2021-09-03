import React from "react";
import "./ProfilePage.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import { useHistory } from "react-router";

const ProfilePage = () => {
	const user = useSelector(selectUser);
	const history = useHistory();
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
							<h3>Plans</h3>
						</div>
						<button
							onClick={() => {
								auth.signOut();
								history.push("/");
							}}
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
