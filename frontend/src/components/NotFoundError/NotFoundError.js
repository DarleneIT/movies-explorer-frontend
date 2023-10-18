import "./NotFoundError.css";
import { Link, useNavigate } from "react-router-dom";

function NotFoundError() {
  const previousPage = useNavigate();
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">Страница не найдена</p>
      <Link onClick={() => previousPage(-1)} className="error__link">
        Назад
      </Link>
    </div>
  );
}

export default NotFoundError;
