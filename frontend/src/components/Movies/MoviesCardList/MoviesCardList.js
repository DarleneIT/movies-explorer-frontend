import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from "../../Preloader/Preloader.js";
import SearchError from "../../SearchError/SearchError";

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
    if (display > 1023) {
      setShownMovies(12);
    } else if (display > 767) {
      setShownMovies(8);
    } else {
      setShownMovies(5);
    }
  }

  useEffect(() => {
    showCardsPortion();
  }, [movies]);

  function showMoreCards() {
    const display = window.innerWidth;
    if (display > 1023) {
      setShownMovies(shownMovies + 4);
    } else if (display > 767) {
      setShownMovies(shownMovies + 3);
    } else {
      setShownMovies(shownMovies + 2);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", showCardsPortion);
    }, 500);
  });

  return (
    <section className="movies-card">
      {isLoading && <Preloader />}

      {isEmptyList && !isLoading && (
        <SearchError errorText={"Ничего не найдено"} />
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
            <>
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
            </>
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
