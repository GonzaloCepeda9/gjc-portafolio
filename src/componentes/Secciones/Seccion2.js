import React from "react";
import CertificadoUTN from "./../../imagenes/CertificadoUTN.png";
// import "../../estilos/Secciones/Secciones.css";

function Seccion2 () {
  return (
    <section className="seccion seccion2" id="formacion">
      <div className="contenedor contenedor-acerca">
        <h2 className="titulo-seccion titulo-contactos">Formación</h2>
        <div className="contenedor-texto">
          <p>Comencé mi formación como Desarrollador Web realizando trainings de manera autodidacta, y para reforzar conocimientos realicé la diplomatura en <strong>Programación Web Full Stack con React JS</strong> en la <strong>Universidad Tecnológica Nacional (UTN) - Facultad Regional de Buenos Aires.</strong></p>
        </div>
        <div className="contenedor-certificado">
          <img className="certificadoUTN" src={CertificadoUTN} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Seccion2;