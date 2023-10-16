import React from "react";
import { useLocation } from "react-router-dom";

import "./MoviesCard.css";
import Poster from "../../../images/33slova.jpg";
import Poster3 from "../../../images/benksi.jpg";
import Poster2 from "../../../images/baskia.jpg";

//проверить

function MoviesCard({ }) {
  const location = useLocation();
  
  
  return (
    <>
      <article className="movie" key={card.id}>
        
        <a
          href={card.trailerLink}
          className="movie__link"
          target="_blank"
        >
          <img
            className="movie__poster"
            alt={card.nameRU}
              src={
                isSavedFilms
                  ? card.image
                  : `https://api.nomoreparties.co/${card.image.url}`
              }
          />
        </a>

        <div className="movie__info">
        <h2 className="movie__title">{card.nameRU}</h2>

        {isSavedFilms ? (
            <button
              type="button"
              className="movie__button"
              onClick={onDelete}
            >
              <img
                className="movie__button-dislike"
                src={btnRemoveMovie}
                alt="крестик удаления карточки с фильмом"
              />
            </button>
          ) : (
            <button
              className={movieLikeBtnClassName}
              onClick={onCardClick}
              type="button"
            ></button>
          )}

        <p className="movie__length">{converterDurationMovie(card.duration)}</p>
          </div>
      </article>


    
    </>
  );
}

export default MoviesCard;
