//Реакт
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

//Стили
import "./Profile.css";

//Компоненты
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.jsx";

//Контекст и хуки
import useFormWithValidation from "../../../hooks/useForm.js";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import  { EMAIL_PATTERN, NAME_PATTERN } from "../../../utils/constants.js"

function Profile({ isLoggedIn, onEditInfo, logOut }) {
  const currentUser = useContext(CurrentUserContext);

  const {
    values,
    handleChange,
    errors,
    isValid,
    reset,
  } = useFormWithValidation();

  function editInfo(e) {
    e.preventDefault();
    onEditInfo(values.name, values.email);
  }

  useEffect(() => {
    reset({ name: currentUser.name, email: currentUser.email });
  }, [reset, currentUser]);

  const [isLastValues, setIsLastValues] = useState(false);

  useEffect(() => {
    if (currentUser) {
      reset(currentUser);
    }
  }, [currentUser, reset]);

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsLastValues(true);
    } else {
      setIsLastValues(false);
    }
  }, [values]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>

        <form className="profile__form" onSubmit={editInfo} values={values}>
          <div className="profile__inputs">
            <label className="profile__name">Имя</label>
            <div className="profile__info">
              <input
                id="input"
                name="name"
                type="text"
                className="profile__input"
                minLength={2}
                maxLength={12}
                required
                pattern={NAME_PATTERN}
                value={values.name || ""}
                onChange={handleChange}
              />
              <span
                className={`profile__error ${
                  errors.name ? "profile__error profile__error_active" : ""
                }`}
              >
                Допустимы только латиница или кириллица. Введите не менее 2х
                символов без пробелов
              </span>
            </div>
          </div>

          <div className="profile__input-line"></div>

          <div className="profile__inputs">
            <label className="profile__name">E-mail</label>
            <div className="profile__info">
              <input
                name="email"
                type="email"
                className="profile__input"
                placeholder="email@email.ru"
                required
                pattern={EMAIL_PATTERN}
                value={values.email || ""}
                onChange={handleChange}
                
              />
              <span
                className={`profile__error ${
                  errors.email ? "profile__error profile__error_active" : ""
                }`}
              >
                Поле E-mail не соответствует шаблону электронной почты
              </span>
            </div>
          </div>

          <button
            type="submit"
            onSubmit={editInfo}
            disabled={!isValid ? true : false}
            className={isLastValues ? "profile__save" : "profile__save_active"}
          >
            Сохранить
          </button>
        </form>

        <label
          htmlFor="input"
          className={
            isLastValues ? "profile__button" : "profile__button_inactive"
          }
        >
          Редактировать
        </label>

        <Link to="/" className="profile__link" onClick={logOut}>
          Выйти из аккаунта
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
