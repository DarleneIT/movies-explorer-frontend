import "./Form.css";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";

function Form({
  title,
  children,
  button,
  path,
  link,
  onSubmit,
  registrationOption,
  isValid,
  

}) {
  return (
    <main className="form">
      <Link to="/" className="logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <h1 className="form__title">{title}</h1>

      <form
      
        onSubmit={onSubmit} 
        id="form" 
        className="form__box" 
        noValidate>

        {children}

        <button
          type="submit"

        onSubmit={onSubmit} 
          className={`"" ${isValid ? "form__button" : "form__button form__button_inactive"}`}
          disabled={!isValid}
        >
          {button}
        </button>
      </form>

      <p className="form__question">
        {registrationOption}
        <Link to={path} className="form__link">
          {link}
        </Link>
      </p>
    </main>
  );
}

export default Form;
