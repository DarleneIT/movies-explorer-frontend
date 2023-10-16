import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { apiMain } from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi"

import "./App.css";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

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
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([apiMain.getUserInfo()], [moviesApi.getMovies()])
      .then(([currentUser], [movies]) => {
        setCurrentUser(currentUser);
        setMovies(movies);
        console.log(currentUser)
      })
      .catch((err) => {
        console.error(`Не удалось получить данные ${err}`);
      });
    }
  }, [isLoggedIn]);


  useEffect(() => {
    handleTokenCheck();
  }, []);
  
  
 


  function handleRegister({ name, email, password }) {
    return apiMain
      .registration({ name, email, password })
      .then(() => {
        handleLogin({ email, password })
      })
      .catch((err) => {
        console.error(`Ошибка регистрации ${err}`);
      })
  }

  function handleLogin({ email, password }) {
    return apiMain
      .authorization({ email, password })
      .then((res) => {
        localStorage.getItem("jwt", res.jwt);
  //добавить сообщение про успешный вход
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.error(`Ошибка авторизации ${err}`);
      });
  }

  function editUserData(userInfo) {
    apiMain
      .editUserData(userInfo)
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => {
        console.error(`Ошибка редактирования данных ${err}`);
      })
  }

  function handleTokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    apiMain
      .checkToken(jwt)
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error(`Ошибка проверки токена ${err}`);
      })
  }
  
  function logOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/");
    window.scrollTo(0, 0);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/signin"
            element={
              isLoggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <SignIn onLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/signup"
            element={
              isLoggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <SignUp onRegister={handleRegister}  />
              )
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header isLoggedIn={!isLoggedIn} />
                <Main />
                <Footer />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}
                editUserData={editUserData}
                logOut={logOut}
              />
            }
          />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isLoggedIn={isLoggedIn}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
              />
            }
          />

          <Route path="*" element={<NotFoundError />} />
        </Routes>
        
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
