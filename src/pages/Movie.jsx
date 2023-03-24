import styles from './Movie.module.css'

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsFillCalendar2DateFill
} from 'react-icons/bs'

import MovieCard from '../components/MovieCard';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {

  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {

    const res = await fetch(url);
    const data = await res.json();

    setMovie(data)
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency", 
      currency: "USD",
    });
  };

  useEffect(() => {

    const movieUrl = `${moviesURL}${id}?api_key=${apiKey}&language=pt-BR`

    getMovie(movieUrl);
  }, [])

  return (
    <div className={styles.movie_page}>
      {movie && (
        <>
          <div className={styles.movie_card}>
            <MovieCard movie={movie} showLink={false} />
          </div> 
          <p className={styles.tagline}>{movie.tagline}</p>
          <div className={styles.info}>
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className={styles.info}>
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className={styles.info}>
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className={styles.info}>
            <h3>
              <BsFillCalendar2DateFill /> Data de lançamento:
            </h3>
            <p>{movie.release_date.split("-").reverse().join('/')}</p>
          </div>
          <div className={styles.description}>
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
          <Link to="/">Voltar</Link>
        </>
      )}
    </div>
  )
}

export default Movie;