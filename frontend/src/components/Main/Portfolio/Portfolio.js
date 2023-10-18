import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
     
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://github.com/DarleneIT/how-to-learn" className="portfolio__link" target="_blank">
            <p className="portfolio__name">Статичный сайт</p>
            <p className="portfolio__arrow"></p>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/DarleneIT/russian-travel" className="portfolio__link" target="_blank">
            <p className="portfolio__name">Адаптивный сайт</p>
            <p className="portfolio__arrow"></p>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/DarleneIT/express-mesto-gha" className="portfolio__link" target="_blank">
            <p className="portfolio__name">Одностраничное приложение</p>
            <p className="portfolio__arrow"></p>
          </a>
        </li>
        
      </ul>

    </section>
  );
}

export default Portfolio;
