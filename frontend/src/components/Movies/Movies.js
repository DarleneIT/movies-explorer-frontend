//Реакт
import React, { useEffect, useCallback, useState } from "react";

//Компоненты
import Header from "../Header/Header.js";
import SearchForm from "./SearchForm/SearchForm.js";
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.jsx";

//Стили
import "./Movies.css";

//Апи
import moviesApi from "../../utils/MoviesApi.js";

function Movies({ isLoggedIn, savedMovies, onLike, onDislike }) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [initialCards, setInitialCards] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isEmptyList, setIsEmptyList] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialCards(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(counterMovieDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

function counterMovieDuration(movies) {
    return movies.filter((movie) => movie.duration < 40);
  }

  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      setIsEmptyList(filteredMovies.length === 0);
    } else {
      setIsEmptyList(false);
    }
  }, [filteredMovies]);

  function searchMovies(result) {
    localStorage.setItem("movieSearch", result);
    localStorage.setItem("shortMovies", isShortMovies);
    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      handleFilterMovie(movies, result, isShortMovies);
    } else {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((savedFilms) => {
          handleFilterMovie(savedFilms, result, isShortMovies);
          setIsError(false);
        })
        .catch((error) => {
          setIsError(true);
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function filterMovies(movies, result) {
    const filter = movies.filter((movie) => {
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const userSearch = result.toLowerCase().trim();
      return (
        movieRu.indexOf(userSearch) !== -1 || movieEn.indexOf(userSearch) !== -1
      );
    });
    return filter;
  }

  function shortMoviesFilter() {
    setIsShortMovies(!isShortMovies);
    if (!isShortMovies) {
      const filteredCardsMovies = counterMovieDuration(initialCards);
      setFilteredMovies(filteredCardsMovies);
    } else {
      setFilteredMovies(initialCards);
    }
    localStorage.setItem("shortMovies", !isShortMovies);
  }

  function handleFilterMovie(movies, query, short) {
    const moviesFilmList = filterMovies(movies, query, short);
    setInitialCards(moviesFilmList);
    setFilteredMovies(
      short ? counterMovieDuration(moviesFilmList) : moviesFilmList
    );
    localStorage.setItem("movies", JSON.stringify(moviesFilmList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  }

  useEffect(() => {
    setIsShortMovies(localStorage.getItem("shortMovies") === "true");
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm
          isShortMovies={isShortMovies}
          onShortMovies={shortMoviesFilter}
          searchMovies={searchMovies}
        />
        <MoviesCardList
          movies={filteredMovies}
          isLoading={isLoading}
          isSavedFilms={false}
          savedMovies={savedMovies}
          isError={isError}
          onLike={onLike}
          onDislike={onDislike}
          isEmptyList={isEmptyList}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
