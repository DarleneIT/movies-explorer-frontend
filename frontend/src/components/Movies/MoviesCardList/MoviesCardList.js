import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from "../../Preloader/Preloader.js";
import SearchError from "../../SearchError/SearchError.js";

import {LAPTOP,
  TABLET,
  MOBILE,
  FOR_LAPTOP,
  FOR_TABLET,
  FOR_MOBILE,
  FOR_OTHERS,
  MORE_FOR_LAPTOP,
  MORE_FOR_TABLET,
  MORE_FOR_MOBILE,
  MORE_FOR_OTHERS } from "../../../utils/constants.js"

function MoviesCardList({
  movies,
  isLoading,
  onDislike,
  onLike,
  isSavedFilms,
  savedMovies,
  isError,
  isEmptyList,
}) {
  const { pathname } = useLocation();
  const [shownMovies, setShownMovies] = useState(0);

  function makeUserMovieList(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  function showCardsPortion() {
    const display = window.innerWidth;
    if (display > LAPTOP) {
      setShownMovies(FOR_LAPTOP);
    } else if (display > TABLET) {
      setShownMovies(FOR_TABLET);
    } else if (display > MOBILE) {
      setShownMovies(FOR_MOBILE);
    } else {
      setShownMovies(FOR_OTHERS);
    }
    window.removeEventListener("resize", showCardsPortion);
  }

  useEffect(() => {
    showCardsPortion();
  }, [movies]);

  function showMoreCards() {
    const display = window.innerWidth;
    if (display > LAPTOP) {
      setShownMovies(shownMovies + MORE_FOR_LAPTOP);
    } else if (display > TABLET) {
      setShownMovies(shownMovies + MORE_FOR_TABLET);
    } else if (display > MOBILE) {
      setShownMovies(shownMovies + MORE_FOR_MOBILE);
    } else {
      setShownMovies(shownMovies + MORE_FOR_OTHERS);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", showCardsPortion);
    }, 500)
  });

  return (
    <section className="movies-card">
      {isLoading && <Preloader />}

      {isEmptyList && !isLoading && (
        <SearchError errorText={"Ничего не найдено"}/>
      )}

      {isError && !isLoading && (
        <SearchError
          errorText={
            "Во время поискового запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          }
        />
      )}

      {!isLoading && !isError && !isEmptyList && (
        <>
          {pathname === "/saved-movies" ? (
              <div className="movies-card__box">
                {movies.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    card={card}
                    saved={makeUserMovieList(savedMovies, card)}
                    onLike={onLike}
                    onDislike={onDislike}
                    isSavedFilms={isSavedFilms}
                    savedMovies={savedMovies}
                  />
                ))}
              </div>
          ) : (
            <>
              <div className="movies-card__box">
                {movies.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    card={card}
                    saved={makeUserMovieList(savedMovies, card)}
                    isSavedFilms={isSavedFilms}
                    savedMovies={savedMovies}
                    onLike={onLike}
                    onDislike={onDislike}
                  />
                ))}
              </div>

              <div className="movies-card__button-box">
                {movies.length > shownMovies ? (
                  <button
                    onClick={showMoreCards}
                    className="movies-card__button"
                  >
                    Ещё
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
