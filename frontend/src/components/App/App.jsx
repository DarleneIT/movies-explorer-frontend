//Реакт
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//Компоненты
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import SignUp from "../Users/SignUp/SignUp.js";
import SignIn from "../Users/SignIn/SignIn.js";
import Profile from "../Users/Profile/Profile.js";
import Footer from "../Footer/Footer.jsx";
import NotFoundError from "../NotFoundError/NotFoundError.js";
import Notification from "../Notification/Notification.js";
import Preloader from "../Preloader/Preloader";

//Стили
import "./App.css";

//Api
import { apiMain } from "../../utils/MainApi";

//Контексты
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  const [isNotificate, setNotification] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);
  const [isCheckToken, setIsCheckToken] = useState(true);



  //Добавление данных на страницу
  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([
        apiMain.getUser(localStorage.jwt),
        apiMain.getMovies(localStorage.jwt),
      ])
        .then(([currentUser, searchedMovies]) => {
          setCurrentUser(currentUser);
          setSavedMovies(searchedMovies);
          setIsLoggedIn(true);
          setIsCheckToken(false);
        })
        .catch((err) => {
          console.error(`Ошибка! ${err}`);
          setIsCheckToken(false);
          localStorage.clear();
        });
    } else {
      setIsLoggedIn(false);
      setIsCheckToken(false);
      localStorage.clear();
    }
  }, [isLoggedIn]);


  //Взаимодействие с фильмами
  function handleMovieDislike(deletedMovie) {
    apiMain
      .dislikeMovie(deletedMovie._id)
      .then(() => {
        setSavedMovies((movies) => movies.filter((movie) => movie._id !== deletedMovie._id))
      })
      .catch((err) => {
        setNotification(true);
        setNotificationTitle('Не удалось удалить фильм');
        setIsSuccess(false);
        console.error(`Не удалось удалить фильм ${err}`);
      })
  }

  function handleMovieLike(card) {
        apiMain
        .likeMovie(card)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => {
          setNotification(true);
          setNotificationTitle('Не удалось сохранить фильм');
          setIsSuccess(false);
          console.error(`Не удалось сохранить фильм ${err}`);
        })
  }

  //Регистрация, авторизация, редактирование профиля
  function handleRegister({ name, email, password }) {
    return apiMain
      .registration({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        setNotification(true);
        setNotificationTitle('Упс! Что-то пошло не так!');
        setIsSuccess(false);
        console.error(`Ошибка регистрации ${err}`)
      })
  }

  function handleLogin({ email, password }) {
    return apiMain
      .authorization({ email, password })
      .then((res) => {
        setIsSuccess(true);
        setNotification(true);
        setNotificationTitle('Отлично! У вас получилось войти!');
        localStorage.setItem("jwt", res.token);
        navigate("/movies");
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setNotification(true);
        setNotificationTitle('Ох! Что-то пошло не так!');
        setIsSuccess(false);
        console.error(`Ошибка авторизации ${err}`)
      })
  }

  function handleEditInfo(name, email) {
    apiMain
      .editUserInfo(name, email, localStorage.jwt)
      .then((data) => {
        setIsSuccess(true);
        setNotification(true);
        setNotificationTitle('Ваши данные успешно обновлены!');
        setCurrentUser(data);
      })
      .catch((err) => {
        setNotification(true);
        setNotificationTitle('Ой-ой! Что-то пошло не так!');
        setIsSuccess(false);
        console.error(`Ошибка редактирования данных ${err}`);
      });
  } 
  
  function logOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
    window.scrollTo(0, 0);
  }

  //Открытие и закрытие попапа
  const isOpen = isNotificate;

  function closePopup() {
    setNotification(false);
  }

  useEffect(() => {
    function closeByKeys(e) {
      if (e.key === 'Escape' || e.key === 'Enter') {
        closePopup()
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByKeys)
      return () => {
        document.removeEventListener("keydown", closeByKeys)
      }
    }
  }, [isOpen])

  function closeByOverlay(e) {
    if (e.target === e.currentTarget) {
      closePopup()
    }
  }

  //Отрисовка страниц
  return (
    <div className="App">
      {isCheckToken ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
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
                      <SignUp
                        onRegister={handleRegister}
                      />
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
                  name='profile'
                  element={
                    <ProtectedRoute
                      element={Profile}
                      isLoggedIn={isLoggedIn}
                      onEditInfo={handleEditInfo}
                      logOut={logOut}
                      isSuccess={isSuccess}
                    />
                  }
                />

                <Route
                  path="/movies"
                  element={
                    <ProtectedRoute
                      element={Movies}
                      isLoggedIn={isLoggedIn}
                      savedMovies={savedMovies}
                      onLike={handleMovieLike}
                      onDislike={handleMovieDislike}
                    />
                  }
                />

                <Route
                  path="/saved-movies"
                  element={
                    <ProtectedRoute
                      element={SavedMovies}
                      isLoggedIn={isLoggedIn}
                      savedMovies={savedMovies}
                      onDislike={handleMovieDislike}
                    />
                  }
                />

                <Route path="*" element={<NotFoundError />} />
              </Routes>

          <Notification 
            text={notificationTitle}
            isOpen={isNotificate}
            isSuccess={isSuccess}
            onCloseOverlay={closeByOverlay}
            onClose={closePopup}
          />
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
