import "./Form.css";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";

function Form({
  title,
  children,
  button,
  path,
  link,
  registrationOption,
  isDisabledButton,
}) {
  return (
    <div className="form">

      <Link to="/" className="logo">
        <img src={logo} alt="Логотип" />
      </Link>

      <h3 className="form__title">{title}</h3>

      <form id="form" className="form__box" noValidate>{children}
        <button
          type="submit"
          className={
            isDisabledButton 
              ? "form__button form__button_inactive"
              : "form__button"
          }
          disabled={isDisabledButton ? true : false}
        >{button}
        </button>
      </form>

      <p className="form__question">
        {registrationOption}
        <Link to={path} className="form__link">
          {link}
        </Link>
      </p>
      
    </div>
  )
}

export default Form;