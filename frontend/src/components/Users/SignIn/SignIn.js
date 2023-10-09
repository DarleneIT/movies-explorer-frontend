import Form from "../Form/Form.js";

function Login() {
  return (
    <Form
      title="Рады видеть!"
      button="Войти"
      registrationOption="Еще не зарегистрированы? "
      link="Регистрация"
      path="/signup"
    >
      <div className="form__inputs">
        <label className="form__input-box">
          <h3 className="form__input-title">E-mail</h3>
          <input
            className="form__input"
            name="email"
            type="email"
            defaultValue="pochta@yandex.ru"
            required
          />
          <span className="form__error">Что-то пошло не так...</span>
        </label>
        <label className="form__input-box">
          <h3 className="form__input-title">Пароль</h3>
          <input
            className="form__input"
            name="password"
            type="password"
            minLength="3"
            maxLength="10"
            required
          />
          <span className="form__error">Что-то пошло не так...</span>
        </label>
      </div>
    </Form>
  );
}

export default Login;
