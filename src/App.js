import "./App.css";
// import Header from "./componentes/Header/Header";
import Seccion1 from "./componentes/Secciones/Seccion1";
import Seccion2 from "./componentes/Secciones/Seccion2";
import Seccion3 from "./componentes/Secciones/Seccion3";
import Seccion4 from "./componentes/Secciones/Seccion4";
import "./estilos/Secciones/Secciones.css";
import "./estilos/Secciones/Celular.css";
import "./estilos/Secciones/Tablet.css";
// import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Seccion1 />
      <Seccion2 />
      <Seccion3 />
      <Seccion4 />
    </div>
  );
}

export default App;