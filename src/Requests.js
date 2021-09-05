const API_KEY = "300f100f3dce70a7ca8f55833be6aedd";

const requests = {
	fetchTrendingNow: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchNowPlaying:`movie/now_playing?api_key=${API_KEY}&language=en-US`,
};

const fetchMovie = (id) => {
	return `/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  }

export {fetchMovie};
export default requests;
