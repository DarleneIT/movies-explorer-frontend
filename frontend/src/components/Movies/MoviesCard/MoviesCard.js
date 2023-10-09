import React from "react";
import { useLocation } from "react-router-dom";

import "./MoviesCard.css";
import Poster from "../../../images/33slova.jpg";
import Poster3 from "../../../images/benksi.jpg";
import Poster2 from "../../../images/baskia.jpg";

function MoviesCard() {
  const location = useLocation();

  return (
    <>
      <article className="movie">
        <a
          href="https://www.kinopoisk.ru/film/1302273"
          className="movie__link"
          target="_blank"
        >
          <img
            className="movie__poster"
            src={Poster}
            alt="Обложка фильма"
          />
        </a>
        <div className="movie__info">
        <h2 className="movie__title">33 слова о дизайне</h2>

        {location.pathname === "/movies" && (
          <button className="movie__button" type="button"></button>
        )}
        {location.pathname === "/saved-movies" && (
          <button className="movie__button movie__button-active" type="button"></button>
        )}
        
        <p className="movie__length">1ч42м</p>
          </div>
      </article>


      <article className="movie">
        <a
          href="https://www.kinopoisk.ru/film/1302273"
          className="movie__link"
          target="_blank"
        >
          <img
            className="movie__poster"
            src={Poster2}
            alt="Обложка фильма"
          />
        </a>
        <div className="movie__info">
        <h2 className="movie__title">Киноальманах «100 лет дизайна»</h2>

        {location.pathname === "/movies" && (
          <button className="movie__button movie__button-active" type="button"></button>
        )}
        {location.pathname === "/saved-movies" && (
          <button className="movie__button movie__button-active" type="button"></button>
        )}
        
        <p className="movie__length">1ч42м</p>
          </div>
      </article>

      <article className="movie">
        <a
          href="https://www.kinopoisk.ru/film/1302273"
          className="movie__link"
          target="_blank"
        >
          <img
            className="movie__poster"
            src={Poster3}
            alt="Обложка фильма"
          />
        </a>
        <div className="movie__info">
        <h2 className="movie__title">В погоне за Бенкси</h2>

        {location.pathname === "/movies" && (
          <button className="movie__button" type="button"></button>
        )}
        {location.pathname === "/saved-movies" && (
          <button className="movie__button movie__button-active" type="button"></button>
        )}
        
        <p className="movie__length">1ч42м</p>
          </div>
      </article>

    </>
  );
}

export default MoviesCard;
