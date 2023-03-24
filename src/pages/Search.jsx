import styles from "./MovieGrid.module.css";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {

    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results)
  };

  useEffect(() => {
    
    const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`;

    getSearchedMovies(searchWithQueryURL)

  }, [query])

  return (
    <div className={styles.container}>
    <h2 className={styles.title}>
      Resultados para: <span className={styles.query_text}>{query}</span>
    </h2>
    <div className={styles.movies_container}>
      {movies.length === 0 && <p>Carregando...</p>}
      {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  </div>
  )
}

export default Search;