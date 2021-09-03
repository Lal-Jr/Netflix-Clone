import React, { useEffect, useState } from "react";
import "./Row.scss";
import axios from "../../axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	const getReleaseYear = (date) => {
		let year = new Date(date);
		return year.getFullYear();
	};

	return (
		<div className="row">
			<h2>{title}</h2>
			<div classname="row__posters" id="row__posters">
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<div>
								<img
									className={`row__posters__poster ${
										isLargeRow &&
										"row__posters__posterLarge"
									}`}
									key={movie.id}
									src={`${base_url}${
										isLargeRow
											? movie.poster_path
											: movie.backdrop_path
									}`}
									alt={movie.name}
								/>
								<div className="row__posters__details">
									<div className="row__posters__details__main">
										<h4>
											{movie.title ||
												movie.original_title ||
												movie.name ||
												movie.original_name}
											<span>
												(
												{getReleaseYear(
													movie.release_date ||
														movie.first_air_date
												)}
												)
											</span>
										</h4>
									</div>
									<div className="row__posters__details__small">
										<h5>Rating: {movie.vote_average}</h5>
										<h4>{movie.original_language}</h4>
									</div>
								</div>
							</div>
						)
				)}
			</div>
		</div>
	);
}

export default Row;
