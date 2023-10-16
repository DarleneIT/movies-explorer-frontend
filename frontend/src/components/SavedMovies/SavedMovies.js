import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.jsx";

function SavedMovies({ isLoggedIn }) {

  return (
    <>
    <Header isLoggedIn={isLoggedIn} />
    <main className="saved-movies">
      <SearchForm />
      
    </main>
    <Footer />
    </>
  );
}

export default SavedMovies;
