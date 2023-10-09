import "./Profile.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../Header/Header.js";

function Profile() {
  const [isLoggedIn] = useState(true);
  return (
    <main className="">
      <Header isLoggedIn={isLoggedIn} />

      <div className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>

        <form className="profile__form">
          <div className="profile__inputs">
            <label className="profile__name">Имя</label>
            <input
              className="profile__input"
              defaultValue="Виталий"
              placeholder="Имя"
              minLength={2}
              maxLength={12}
              required
            />
          </div>

          <div className="profile__input-line"></div>

          <div className="profile__inputs">
            <label className="profile__name">E-mail</label>
            <input
              className="profile__input"
              defaultValue="pochta@yandex.ru"
              placeholder="email@email.ru"
              required
            />
          </div>
        </form>

        <button type="submit" className="profile__button">
          Редактировать
        </button>

        <Link to="/" className="profile__link">
          Выйти из аккаунта
        </Link>
      </div>
    </main>
  );
}

export default Profile;
