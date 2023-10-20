import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./SearchForm.css";

function SearchForm({ onShortMovies, isShortMovies, searchMovies }) {
  const [isSearchingError, setIsSearchError] = useState(false);
  const location = useLocation();
  const [result, setResult] = useState("");

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("movieSearch")
    ) {
      const local = localStorage.getItem("movieSearch");
      setResult(local);
    }
  }, [location]);

  function findMovies(e) {
    e.preventDefault();
    if (result.trim().length === 0) {
      setIsSearchError(true);
    } else {
      setIsSearchError(false);
      searchMovies(result);
    }
  }

  function inputChange(e) {
    setResult(e.target.value);
  }
  return (
    <section className="search">
      <form className="search__form" onSubmit={findMovies} id="form">
        <div className="search__box">
          <input
            className="search__input"
            placeholder="Фильм"
            required
            type="text"
            name="result"
            value={result || ""}
            onChange={inputChange}
          ></input>

          <span
            className={`search__empty ${
              isSearchingError ? "search__empty search__empty_active" : "search__tumbler-title"
            }`}
          >
            Введите ключевое слово для поиска
          </span>

          <button className="search__button" type="submit">
            Найти
          </button>
        </div>

        <div className="search__checkbox">
          <label className="search__tumbler">
            <input
              id="checkbox"
              type="checkbox"
              onChange={onShortMovies}
              checked={isShortMovies}
            />
            <span className="search__slider"></span>
          </label>
          <p className="search__tumbler-title">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
