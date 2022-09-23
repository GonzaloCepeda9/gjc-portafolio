import React from "react";
import Calculadora from "./../../imagenes/Calculadora-freeCodeCamp.jpg";
import ContadorClicks from "./../../imagenes/ContadorClicks-freeCodeCamp.jpg";
import Tareas from "./../../imagenes/Tareas-freeCodeCamp.jpg";
import Testimonios from "./../../imagenes/Testimonios-freeCodeCamp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import videoProyecto from "../../archivos/VideoProyecto.mp4";
import imagenVideo from "../../imagenes/Mundial2022c.jpg";

function Seccion3 () {
  return (
    <section className="seccion seccion3" id="proyectos">
      <div className="contenedor contenedor-proyectos">
        <h2 className="titulo-seccion titulo-contactos">Proyectos</h2>
        <h3 className="titulo-secundario">Proyectos Básicos</h3>
        <div className="proyectos-basicos">
            <div className="contenedor-proyecto">
              <img className="imagen-proyecto" src={Testimonios} alt="" />
              <div className="links-proyectos">
                <a href="https://testimonios-gjc.netlify.app/" target="blank1" className="link-proyecto link-web">Ir a la página web<FontAwesomeIcon className="icon-link" icon={faExternalLinkAlt} /></a>
                <a href="https://github.com/GonzaloCepeda9/freeCodeCamp-testimonios" target="blank2" className="link-proyecto">Ver código en GitHub<FontAwesomeIcon className="icon-link" icon={faExternalLinkAlt} /></a>
              </div>
            </div>
            <div className="contenedor-proyecto">
              <img className="imagen-proyecto" src={ContadorClicks} alt="" />
              <div className="links-proyectos">
                <a href="https://contadorclicks-gjc.netlify.app/" target="blank3" className="link-proyecto link-web">Ir a la página web<FontAwesomeIcon className="icon-link" icon={faExternalLinkAlt} /></a>
                <a href="https://github.com/GonzaloCepeda9/freeCodeCamp-contadorClicks" target="blank4" className="link-proyecto">Ver código en GitHub<FontAwesomeIcon className="icon-link" icon={faExternalLinkAlt} /></a>
              </div>
            </div>
            <div className="contenedor-proyecto">
              <img className="imagen-proyecto" src={Calculadora} alt="" />
              <div className="links-proyectos">
                <a href="https://calculadora-gjc.netlify.app/" target="blank5" className="link-proyecto link-web">Ir a la página web<FontAwesomeIcon className="icon-link" icon={faExternalLinkAlt} /></a>
                <a href="https://github.com/GonzaloCepeda9/freeCodeCamp-calculadora" target="blank6" className="link-proyecto">Ver código en GitHub<FontAwesomeIcon className="icon-link" icon={faExternalLinkAlt} /></a>
              </div>
            </div>
            <div className="contenedor-proyecto">
              <img className="imagen-proyecto" src={Tareas} alt="" />
              <div className="links-proyectos">
                <a href="https://tareas-gjc.netlify.app/" target="blank7" className="link-proyecto link-web">Ir a la página web<FontAwesomeIcon className="icon-link" icon={faExternalLinkAlt} /></a>
                <a href="https://github.com/GonzaloCepeda9/freeCodeCamp-tareas" target="blank8" className="link-proyecto">Ver código en GitHub<FontAwesomeIcon className="icon-link" icon={faExternalLinkAlt} /></a>
              </div>
            </div>
        </div>
        <h3 className="titulo-secundario">Proyecto Avanzado</h3>
        <div className="proyecto-principal">
          <div className="contenedor-proyecto">
            <video className="video-proyecto" width="400" height="400" poster={imagenVideo} controls>
              <source src={videoProyecto} type="" />
            </video>
            <div className="links-proyectos link-web">
              <p className="link-proyecto2">Ir a la página web</p>
              <div className="contenedor-links">
                <a href="https://mundial2022-gjc.herokuapp.com/" target="blank7" className="link-proyecto link-doble">(backend)<FontAwesomeIcon className="icon-link" icon={faExternalLinkAlt} /></a>
                <a href="https://mundial2022-gjc.netlify.app/" target="blank7" className="link-proyecto link-doble">(frontend)<FontAwesomeIcon className="icon-link" icon={faExternalLinkAlt} /></a>
              </div>
            </div>
            <div className="links-proyectos links-proyectos3">
              <p className="link-proyecto2">Ver código en GitHub</p>
              <div className="contenedor-links">
                <a href="https://github.com/GonzaloCepeda9/gjc-mundial2022-backend" target="blank" className="link-proyecto link-doble">(backend)<FontAwesomeIcon className="icon-link" icon={faExternalLinkAlt} /></a>
                <a href="https://github.com/GonzaloCepeda9/gjc-mundial2022-frontend" target="blank" className="link-proyecto link-doble">(frontend)<FontAwesomeIcon className="icon-link" icon={faExternalLinkAlt} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seccion3;