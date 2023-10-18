//Реакт
import React, { useEffect, useState } from "react";

//Компоненты
import Header from "../Header/Header.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.jsx";

//Стили
import "./SavedMovies.css";

function SavedMovies({ isLoggedIn, savedMovies, onDislike }) {
  const [searchList, setSearchList] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isEmptyList, setEmptyList] = useState(false);

  //из полезного

  function counterDurationMovie(movies) {
    return movies.filter((movie) => movie.duration < 40);
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

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setEmptyList(true);
    } else {
      setEmptyList(false);
    }
  }, [filteredMovies]);

  useEffect(() => {
    const moviesFilmList = filterMovies(savedMovies, searchList);
    setFilteredMovies(
      isShortMovies ? counterDurationMovie(moviesFilmList) : moviesFilmList
    );
  }, [savedMovies, isShortMovies, searchList]);

  function shortMoviesFilter() {
    setIsShortMovies(!isShortMovies);
  }

  function searchMovies(res) {
    setSearchList(res);
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="saved-movies">
        <SearchForm
          onShortMovies={shortMoviesFilter}
          searchMovies={searchMovies}
        />
        <MoviesCardList
          movies={filteredMovies}
          isSavedFilms={true}
          savedMovies={savedMovies}
          onDislike={onDislike}
          isEmptyList={isEmptyList}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
