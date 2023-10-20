import React from "react";
import { useLocation } from "react-router-dom";

import "./MoviesCard.css";

function MoviesCard({
  card,
  saved,
  isSavedFilms,
  savedMovies,
  onLike,
  onDislike,
}) {
  const { pathname } = useLocation();

  function onCardLike() {
    if (saved) {
      onDislike(savedMovies.filter((item) => item.movieId === card.id)[0]);
    } else {
      onLike(card);
    }
  }

  function onCardDislike() {
    onDislike(card);
  }

  function convertMovieDuration(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return `${hours}ч${minutes}м`;
  }

  return (
    <>
      <article className="movie" key={card.id}>
        <a href={card.trailerLink} className="movie__link" target="_blank">
          <img
            className="movie__poster"
            src={
              isSavedFilms
                ? card.image
                : `https://api.nomoreparties.co/${card.image.url}`
            }
            alt={card.name}
          />
        </a>

        <div className="movie__info">
          <h2 className="movie__title">{card.nameRU}</h2>

          {pathname === "/movies" ? (
            <button
              className={`movie__button ${saved ? "movie__button-active" : ""}`}
              type="button"
              onClick={onCardLike}
            ></button>
          ) : (
            <button
              className="movie__button-dislike"
              type="button"
              onClick={onCardDislike}
            ></button>
          )}

          <p className="movie__length">{convertMovieDuration(card.duration)}</p>
        </div>
      </article>
    </>
  );
}

export default MoviesCard;
