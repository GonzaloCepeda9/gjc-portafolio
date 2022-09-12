import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


function Seccion1 () {

  function goTop () {
    window.scrollTo({top: 0});
  }

  window.onscroll = function () {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 100){
      document.querySelector(".go-top-container").classList.add("show");
    }
    else {
      document.querySelector(".go-top-container").classList.remove("show");
    }
  }

  return (
    <section className="seccion seccion1" id="principal">
      <div className="contenedor contenedor-principal">
        <div className="contenedor-titulo">
          <h1 className="titulo-principal">Gonzalo Cepeda</h1>
        </div>
        <div className="contenedor-lista">
          <ul>
            <li><a href="#formacion">Formación<FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></a></li>
            <li><a href="#proyectos">Proyectos<FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></a></li>
            <li><a href="#contacto">Contacto<FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></a></li>
          </ul>
        </div>
      </div>
        <button className="go-top-container" id="go-top-container" onClick={goTop}>
          <FontAwesomeIcon className="go-top-button" icon={faChevronUp} />
        </button>
    </section>
  );
}

export default Seccion1;