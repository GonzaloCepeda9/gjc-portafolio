import React, { useState } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import { WhatsAppOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import { GithubOutlined } from "@ant-design/icons";

function Seccion4 () {

  const [clicked, setClicked] = useState(false)

  function showForm () {
    setClicked(!clicked);
  }

  function sendEmail (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_5xq8j1s",
      "template_z9vxj2m",
      e.target,
      "cmXOTv_U6p33FmZBW"
    ).then(res=>{
      console.log(res);
      swal({
        title: "Mensaje enviado",
        text: "El mensaje ha sido enviado con éxito.",
        icon: "success",
        button: "Aceptar",
        timer: 2000
      });
    }).catch(err=> console.log(err));
  }

  return (
    <section className="seccion seccion4" id="contacto">
      <div className="contenedor contenedor-contacto">
        <h2 className="titulo-seccion titulo-contactos">Contacto</h2>
        <div className="contenedor-contactos">
          <a href="https://wa.me/5493446612790" className="contenedor-icon contenedor-whatsapp" target="blank1">
            <WhatsAppOutlined className="icon-contacto icon-whatsapp" />
          </a>
          <a href="https://www.instagram.com/gonzalocepeda9/" className="contenedor-icon contenedor-instagram" target="blank2">
            <InstagramOutlined className="icon-contacto icon-instagram" />
          </a>
          <a href="https://www.facebook.com/gonza.cepeda.7/" className="contenedor-icon contenedor-facebook" target="blank3">
            <FacebookOutlined className="icon-contacto icon-facebook" />
          </a>
          <div className="contenedor-icon contenedor-email" onClick={showForm}>
            <MailOutlined className="icon-contacto icon-email" />
          </div>
          <a href="https://www.linkedin.com/feed/" className="contenedor-icon contenedor-linkedin" target="blank4">
            <LinkedinOutlined className="icon-contacto icon-linkedin" />
          </a>
          <a href="https://github.com/GonzaloCepeda9/" className="contenedor-icon contenedor-github" target="blank5">
            <GithubOutlined className="icon-contacto icon-github" />
          </a>          
        </div>
        <div className={clicked ? "formulario-gmail" : "formulario-hidden"}>
          <form className="contenedor-formulario" onSubmit={sendEmail}>
            <div className="contenedor-secundario secundario-titulo">
              <p className="gmail-titulo">Enviar email a</p>
              <p><em className="gmail-correo">gjcepeda9@gmail.com</em></p>
            </div>
            <div className="contenedor-secundario">
              <label className="formulario-label" htmlFor="nombre">Nombre</label>
              <input type="text" className="formulario-input" placeholder="Escribe tu nombre y apellido" name="nombre" autocomplete="off" required />
            </div>
            <div className="contenedor-secundario">
              <label className="formulario-label" htmlFor="correo">Email</label>
              <input type="email" className="formulario-input" placeholder="Escribe tu dirección de email" name="correo" id="correo" autocomplete="off" required />
            </div>
            <div className="contenedor-secundario">
              <label className="formulario-label" htmlFor="mensaje">Mensaje</label>
              <textarea className="formulario-textarea" placeholder="Escribe tu mensaje..." name="mensaje" id="mensaje" autocomplete="off" required />
            </div>
            <button className="formulario-boton" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Seccion4;