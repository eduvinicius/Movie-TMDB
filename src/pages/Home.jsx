import styles from "./MovieGrid.module.css";

import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {

    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results)
  };

  useEffect(() => {
    
    const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}&language=pt-BR`;

    getTopRatedMovies(topRatedUrl)

  }, [])
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Melhores filmes:</h2>
      <div className={styles.movies_container}>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Home;