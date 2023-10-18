import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__box">
        <input className="search__input" placeholder="Фильм" required></input>

        <button className="search__button" type="submit">
          Найти
        </button>
      </form>

      <div className="search__checkbox">
        <label className="search__tumbler button">
          <input type="checkbox" />
          <span className="search__slider"></span>
        </label>
        <p className="search__tumbler-title">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
