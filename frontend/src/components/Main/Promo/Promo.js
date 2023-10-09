import { HashLink as Link } from 'react-router-hash-link';
import "./Promo.css";

function Promo() {
    return (
      <section className="promo">
        <div className="promo__box">
        <div className="promo__text">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__info">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <Link to="#project" className="promo__button" type="button" smooth={true}>Узнать больше</Link>
        </div>
        <p alt="#" className="promo__image"></p>
        </div>
      </section>
    );
  }
  
  export default Promo;