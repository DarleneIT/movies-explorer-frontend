import useFormWithValidation from "../../../hooks/useForm.js";
import Form from "../Form/Form.js";

import React from "react"


function Login({ onLogin }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email: values.email, 
      password: values.password});
  }
  
  return (
      <Form
        title="Рады видеть!"
        button="Войти"
        registrationOption="Еще не зарегистрированы? "
        link="Регистрация"
        path="/signup"

        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <div className="form__inputs">
          <div className="form__input-box">
            <label className="form__input-title">E-mail</label>
            <input
              className={`form__input ${errors.email ? 'form__input form__input_error' : ''}`}
              name="email"
              type="email"
              placeholder="Ваш e-mail"
              autoComplete="off"

              onChange={handleChange}
              value={values.email || ''}

              required
            />
            <span className={`form__error ${errors.email ? 'form__error form__error_active' : ''}`}>Что-то пошло не так...</span>
          </div>
          <div className="form__input-box">
            <label className="form__input-title">Пароль</label>
            <input
              className={`form__input ${errors.password ? 'form__input form__input_error' : ''}`}
              name="password"
              type="password"
              placeholder="Введите пароль"
              minLength="3"
              maxLength="10"
              autoComplete="off"

              onChange={handleChange}
              value={values.password || ''}

              required
            />
            <span className={`form__error ${errors.password ? 'form__error form__error_active' : ''}`}>Что-то пошло не так...</span>
          </div>
        </div>
      </Form>
  );
}

export default Login;
