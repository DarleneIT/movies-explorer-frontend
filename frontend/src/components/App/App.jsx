import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import SignUp from "../Users/SignUp/SignUp.js";
import SignIn from "../Users/SignIn/SignIn.js";
import Profile from "../Users/Profile/Profile.js";
import Footer from "../Footer/Footer.jsx";
import NotFoundError from "../NotFoundError/NotFoundError.js";

function App() {
  const isLoggedIn = useState(true);
  const cards = 4;
  const savedCards = 1;
  const cardsList = Array(cards).fill({ value: 0 });
  const savedCardsList = Array(savedCards).fill({ value: 0 });

  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Main name="home" />
              <Footer />
            </>
          }
        />

        <Route path="/profile" element={<Profile />} />

        <Route
          path="/movies"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Movies name="movies" cards={cardsList} />
              <Footer />
            </>
          }
        />

        <Route
          path="/saved-movies"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies name="movies" cards={savedCardsList} />
              <Footer />
            </>
          }
        />

        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </div>
  );
}

export default App;
