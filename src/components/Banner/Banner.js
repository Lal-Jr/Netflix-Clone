import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../axios";
import requests from "../../Requests";
import { GoPlus } from "react-icons/go";
import { BsPlayFill } from "react-icons/bs";

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, []);

	const truncate = (string, numLine) => {
		return string?.length > numLine
			? string.substr(0, numLine - 1) + "..."
			: string;
	};
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__contents__title">
					{movie?.title || movie?.original_name}
				</h1>
				<div className="banner__contents__buttons">
					<button className="banner__contents__buttons__button__invert">
						Play
					</button>
					<button className="banner__contents__buttons__button">
						<GoPlus style={{ marginRight: "5px" }} />
						Watchlist
					</button>
				</div>
				<h1 className="banner__contents__description">
					{truncate(movie?.overview, 150)}
				</h1>
				<button className="banner__contents__buttons__button">
					<BsPlayFill style={{ marginRight: "5px" }} />
					Watch Trailer
				</button>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	);
};

export default Banner;
