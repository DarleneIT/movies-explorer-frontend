import "./Profile.css";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../../hooks/useForm.js";

import { useEffect } from "react";
import { useContext, useState } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.jsx";

function Profile({ isLoggedIn, editUserData, logOut }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [lastName, setLastName] = useState(currentUser.name);

  const {
    values,
    handleChange,
    errors,
    isValid,
    reset,
  } = useFormWithValidation();

  function onSubmit(e) {
    e.preventDefault();
    editUserData(values.name, values.email);
  }

  function handleNameChange(e) {
    const value = e.target.value;
    setName(value);
  }

  useEffect(() => {
    reset({ name: currentUser.name, email: currentUser.email });
  }, [reset, currentUser]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile">
        <h1 className="profile__title">{`Привет, ${name}!`}</h1>

        <form
          isValid={isValid}
          onSubmit={onSubmit}
          values={values}
          className="profile__form"
        >
          <div className="profile__inputs">
            <label className="profile__name">Имя</label>
            <input
        
              className="profile__input"
              defaultValue="Виталий"
              placeholder="Имя"
              minLength={2}
              maxLength={12}

              value={values.name}
              error={errors.name}
              onChange={handleNameChange}

              //required
            />
          </div>

          <div className="profile__input-line"></div>

          <div className="profile__inputs">
            <label className="profile__name">E-mail</label>
            <input

              className="profile__input"
              defaultValue="pochta@yandex.ru"
              placeholder="email@email.ru"
              
              value={values.email}
              error={errors.email}
              onChange={handleChange}
              //required
            />
          </div>
        </form>

        <button 
          type="submit" 
          disabled={!isValid ? true : false}
          
          className={
            !isValid
              ? "profile__button form__button-save_inactive"
              : "profile__button-save"
          }>
          Редактировать
        </button>

        <Link to="/" className="profile__link" onClick={logOut}>
          Выйти из аккаунта
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
