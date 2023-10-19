import React from "react";
import Form from "../Form/Form.js";
import Preloader from "../../Preloader/Preloader.js";
import useFormWithValidation from "../../../hooks/useForm.js";
import { EMAIL_PATTERN, NAME_PATTERN } from "../../../utils/constants.js";

function Register({ onRegister, isLoading }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function onSubmit(e) {
    e.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  return (
    <Form
      title="Добро пожаловать!"
      button="Зарегистрироваться"
      registrationOption="Уже зарегистрированы? "
      link="Войти"
      path="/signin"
      onSubmit={onSubmit}
      isValid={isValid}
    >
      <div className="form__inputs">
      {isLoading && <Preloader />}
        <div className="form__input-box">
          <label className="form__input-title">Имя</label>
          <input
            className={`form__input ${
              errors.name ? "form__input form__input_error" : ""
            }`}
            name="name"
            type="text"
            placeholder="Ваше имя"
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
            pattern={NAME_PATTERN}
            onChange={handleChange}
            value={values.name || ""}
          />
          <span
            className={`form__error ${
              errors.name ? "form__error form__error_active" : ""
            }`}
          >
            Допустимы только латиница или кириллица. Введите не менее 2х символов без пробелов.
          </span>
        </div>

        <div className="form__input-box">
          <label className="form__input-title">E-mail</label>
          <input
            name="email"
            className={`form__input ${
              errors.email ? "form__input form__input_error" : ""
            }`}
            type="email"
            placeholder="Ваш e-mail"
            autoComplete="off"
            required
            pattern={EMAIL_PATTERN}
            onChange={handleChange}
            value={values.email || ""}
          />
          <span
            className={`form__error ${
              errors.email ? "form__error form__error_active" : ""
            }`}
          >
            Email не соответствует шаблону abc123@abc.com
          </span>
        </div>

        <div className="form__input-box">
          <label className="form__input-title">Пароль</label>
          <input
            name="password"
            className={`form__input ${
              errors.password ? "form__input form__input_error" : ""
            }`}
            type="password"
            id="password"
            placeholder="Введите пароль"
            minLength="3"
            maxLength="10"
            autoComplete="off"
            required
            onChange={handleChange}
            value={values.password || ""}
          />
          <span
            className={`form__error ${
              errors.password ? "form__error form__error_active" : ""
            }`}
          >
            Введите не менее 3-х символов
          </span>
        </div>
      </div>
    </Form>
  );
}

export default Register;
