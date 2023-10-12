import React from "react";
import "./Movies.css";

import SearchForm from "./SearchForm/SearchForm.js";
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";

function Movies(props) {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList cards={props.cards} />
      <button className="movies__button" type="button">
        Ещё
      </button>
    </main>
  );
}

export default Movies;
