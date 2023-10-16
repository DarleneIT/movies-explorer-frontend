import React from "react";
import "./Movies.css";
import Header from "../Header/Header.js";
import SearchForm from "./SearchForm/SearchForm.js";
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.jsx";

function Movies({ isLoggedIn }) {

  return (
    <> 
    <Header isLoggedIn={isLoggedIn} />
    <main className="movies">
      <SearchForm />
      
      <button className="movies__button" type="button">
        Ещё
      </button>
    </main>
    <Footer />
    </>
  );
}

export default Movies;
