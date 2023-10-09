import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ cards }) {
  return (
    <div className="movies-card">
      <section>
        <div className="movies-card__box">
          {cards.map((card) => (
            <MoviesCard key={ card } />
          ))}
        </div>
      </section>
    </div>
  );
}

export default MoviesCardList;
