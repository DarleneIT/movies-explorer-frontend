import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ cards }) {
  return (
    <section className="movies-card">
        <div className="movies-card__box">
          {cards.map((card) => (
            <MoviesCard key={ card._id }/>
          ))}
        </div>
    </section>
  );
}

export default MoviesCardList;
