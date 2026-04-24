import { createContext, useContext, useEffect } from "react";
import {
  fetchGenres,
  fetchPopularMovies,
  fetchTopRatedrMovies,
  fetchTrendingMovies,
} from "../services/api";

const MoviesContext = createContext();
export const useMovies = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(ture);
        const [trending, popular, topRated, genreList] = await Promise.all([
          fetchTrendingMovies(),
          fetchPopularMovies(),
          fetchTopRatedrMovies(),
          fetchGenres(),
        ]);
        setTrendingMovies(trending);
        setPopularMovies(popular);
        setTopRatedMovies(topRated);
        setGenres(genreList);
      } catch (err) {
        console.log("error fetching movies data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieData();
  }, []);
};

//1:23:50
