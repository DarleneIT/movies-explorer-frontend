import "./AboutMe.css";
import avatar from "../../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__box">
        <div className="student__text">
          <h3 className="student__name">Виталий</h3>
          <h4 className="student__subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="student__description">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб&#8209;разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="student__link" href='https://github.com/darleneIT' target="_blank">Github</a>
        </div>
        <img src={avatar} alt="Фотография студента" className="student__image" />
      </div>
    </section>
  );
}

export default AboutMe;
