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
          <div className="form__input-box">
            <label className="form__input-title" for="email">E-mail</label>
            <input
              className="form__input"
              name="email"
              type="email"
              id="email"
              placeholder="Ваш e-mail"
              defaultValue="pochta@yandex.ru"
              required
            />
            <span className="form__error">Что-то пошло не так...</span>
          </div>
          <div className="form__input-box">
            <label className="form__input-title" for="password">Пароль</label>
            <input
              className="form__input"
              name="password"
              type="password"
              id="password"
              placeholder="Введите пароль"
              minLength="3"
              maxLength="10"
              required
            />
            <span className="form__error">Что-то пошло не так...</span>
          </div>
        </div>
      </Form>
  );
}

export default Login;
