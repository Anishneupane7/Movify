const API_KEY = "61cafe27fe0a34e65a23757b9264be83";
const BASE_URL = "https://www.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    );

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error Featching trending movies ", error);
    return [];
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    );

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error Featching trending movies", error);
    return [];
  }
};

export const fetchTopRatedrMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    );

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error Featching trending movies", error);
    return [];
  }
};
export const fetchMoviesByGenre = async (genreId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genre=${genreId}&page=1`,
    );

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error Featching trending movies", error);
    return [];
  }
};

export const fetchGenres = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    );

    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error("Error Featching trending movies", error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/${movieId}?api_key=${API_KEY}&language=en-US`,
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error Featching trending movies", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    );

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error Featching trending movies", error);
    return [];
  }
};

export const getImageURL = (path, size = "original") => {
  if (!path) {
    return "https://via.placeholder.com/400*600?text=No+image+Available";
    return `https://image.imdb.org/t/p/${size}${path}`;
  }
};
