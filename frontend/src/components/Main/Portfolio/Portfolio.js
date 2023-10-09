import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">

        <li className="portfolio__item">
          <a href="#" className="portfolio__link" target="_blank">
            <p className="portfolio__name">Статичный сайт</p>
            <button type="button" className="portfolio__arrow-button"></button>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="#" className="portfolio__link" target="_blank">
            <p className="portfolio__name">Адаптивный сайт</p>
            <button type="button" className="portfolio__arrow-button"></button>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="#" className="portfolio__link" target="_blank">
            <p className="portfolio__name">Одностраничное приложение</p>
            <button type="button" className="portfolio__arrow-button"></button>
          </a>
        </li>
        
      </ul>
    </section>
  );
}

export default Portfolio;
