import React from "react";
import './AboutProject.css'

function AboutProject() {
  return (
    <section className="project" id="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__description">
        <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
        <h3 className="project__subtitle">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="project__info">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="project__info">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="project__timeline">
        <div>
          <p className="project__weeks">1 неделя</p>
          <p className="project__stage">Back-end</p>
        </div>
        <div>
          <p className="project__weeks project__weeks_frontend">4 недели</p>
          <p className="project__stage">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
