import "./Main.css";

import Promo from "./Promo/Promo.js";
import AboutProject from "./AboutProject/AboutProject.js";
import Techs from "./Techs/Techs.js";
import AboutMe from "./AboutMe/AboutMe.js";
import Portfolio from "./Portfolio/Portfolio.js";

function Main() {
  return (
    <div className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default Main; 

