import fondo from './assets/images/fondo2.jpeg';
import estudios from './assets/images/libros.jpg';
import exp from './assets/images/trabajo2.jpg';
import './assets/css/App.css';

//importar componentes
import Footer from './components/footer';
import { Parallax } from 'react-parallax';

function App() {
  return (

    <div className="App">

      <header className="App-header">
      <h1>Raúl Medina Garcia-Navas</h1>
      <h3>Estudiante</h3>

      </header>
      <body className="App-body">
      <Parallax className="bg-image" bgImage = { estudios }>
      <div className="div-educacion">
        <h2>Educación</h2>
        <br/>
        <h4>2012-2016</h4>
        <p>Titulo de la ESO. IES JUAN GRIS, Móstoles.</p>
        <h4>2016-2018</h4>
        <p>Título de Bachillerato. IES JUAN GRIS, Móstoles.</p>
        <h4>2018-2020</h4>
        <p>Grado Superior, Desarrollo de Aplicaciones Multiplataforma, Actualmente en prácticas. IES CAÑAVERAL, Móstoles.</p>
        <br/>
        <h2>Idiomas</h2>
        <br/>
        <p>Ingles:</p>
        <div class="progress m-3">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: '51%'}} aria-valuenow="51" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <p>Español:</p>
        <div class="progress m-3">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      </Parallax>
      <Parallax  bgImage = { exp }>
      <div className="div-experiencias">
        <h2>Experiencias</h2>
        <br/>
        <h4>Mayo. 2019 – Agosto. 2020</h4>
         <p>KFC Móstoles el Soto (Restauravia Food, S.L).</p>
         <p>Team Member, Camarero, Cajero, Ayudante de cocina</p>
      </div>
      </Parallax>
      <Parallax  bgImage = { fondo }>
      <div className = "div-yo">
        <div className="div-datos-personales">
          <h2>Datos personales</h2>
          <br/>
          <p>C/París, Móstoles</p>
          <p>Raulmedinagn@gmail.com</p>
          <p>683592078</p>
          <br/>
        <h2>Intereses</h2>
        <br/>
        <p>Deportes: Me gusta despejarme haciendo deporte, ya sea en el gimnasio, jugando al futbol, haciendo natación… </p>
        <p>Mundo del motor: es uno de mis hobbies, Dispongo del carné de conducir.</p>
        </div>
      </div>
      </Parallax>


      </body>
      <div className="div-footer">
        <Footer/>
      </div>

    </div>
  );
}

export default App;
