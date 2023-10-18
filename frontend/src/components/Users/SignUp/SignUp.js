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
        <label className="form__input-box">
          <h3 className="form__input-title">Имя</h3>
          <input
            className="form__input"
            name="name"
            type="text"
            defaultValue="Виталий"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="form__error">Что-то пошло не так...</span>
        </label>

        <label className="form__input-box">
          <h3 className="form__input-title">E-mail</h3>
          <input
            name="email"
            className="form__input"
            type="email"
            defaultValue="pochta@yandex.ru"
            required
          />
          <span className="form__error">Что-то пошло не так...</span>
        </label>

        <label className="form__input-box">
          <h3 className="form__input-title">Пароль</h3>
          <input
            name="password"
            className="form__input form__input_error"
            type="password"
            defaultValue="*********"
            minLength="3"
            maxLength="10"
            required
          />
          <span className="form__error_active">Что-то пошло не так...</span>
        </label>
      </div>
    </Form>
  );
}

export default Register;
