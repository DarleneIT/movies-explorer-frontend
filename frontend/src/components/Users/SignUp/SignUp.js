import Form from "../Form/Form";

function Register() {
  return (
      <Form
        title="Добро пожаловать!"
        button="Зарегистрироваться"
        registrationOption="Уже зарегистрированы? "
        link="Войти"
        path="/signin"
        isDisabledButton
      >
        <div className="form__inputs">
          <div className="form__input-box">
            <label className="form__input-title" for="name">
              Имя
            </label>
            <input
              className="form__input"
              name="name"
              type="text"
              id="name"
              defaultValue="Виталий"
              placeholder="Ваше имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="form__error">Что-то пошло не так...</span>
          </div>

          <div className="form__input-box">
            <label className="form__input-title" for="email">
              E-mail
            </label>
            <input
              name="email"
              className="form__input"
              type="email"
              id="email"
              placeholder="Ваш e-mail"
              defaultValue="pochta@yandex.ru"
              required
            />
            <span className="form__error">Что-то пошло не так...</span>
          </div>

          <div className="form__input-box">
            <label className="form__input-title" for="password">
              Пароль
            </label>
            <input
              name="password"
              className="form__input form__input_error"
              type="password"
              id="password"
              placeholder="Введите пароль"
              defaultValue="*********"
              minLength="3"
              maxLength="10"
              required
            />
            <span className="form__error form__error_active">
              Что-то пошло не так...
            </span>
          </div>
        </div>
      </Form>
  );
}

export default Register;
