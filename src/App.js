import fondo from './assets/images/fondo2.jpeg';
import foto from './assets/images/foto.jpg';
import estudios from './assets/images/libros.jpg';
import exp from './assets/images/trabajo2.jpg';
import header from './assets/images/header.jpg';
import './assets/css/App.css';

import { Parallax } from 'react-parallax';
//importar componentes
import Footer from './components/footer';


function App() {

  return (
    <div className="App">
      <Parallax bgImage = {header}>
        <header className="App-header">
        <img className = "img-yo" src={foto}/>
        <div>
          <h1>Raúl Medina Garcia-Navas</h1>
          <h3>Estudiante</h3>
        </div>
      </header>
      </Parallax>




      <body className="App-body">
      <Parallax bgImage = { estudios }>
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
         <p>Team Member</p>
         <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle m-2" viewBox="0 0 16 16">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
            </svg>
         Camarero
         </p>
         <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle m-2" viewBox="0 0 16 16">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
            </svg>
         Cajero
         </p>
         <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle m-2" viewBox="0 0 16 16">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
            </svg>
         Ayudante de cocina
         </p>
      </div>
      </Parallax>
      <Parallax  bgImage = { fondo }>
      <div className = "div-yo">
        <div className="div-datos-personales">
          <h2>Datos personales</h2>
          <br/>
          <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill m-2" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          C/París, Móstoles</p>
          <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope m-2" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
          </svg>
          Raulmedinagn@gmail.com</p>
          <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill m-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          683592078
          </p>
          <br/>
        <h2>Intereses</h2>
        <div className="div-Intereses">
          <p>Deportes: Me gusta despejarme haciendo deporte, ya sea en el gimnasio, jugando al futbol, haciendo natación… </p>
          <p>Mundo del motor: es uno de mis hobbies, Dispongo del carné de conducir.</p>
        </div>
        </div>
      </div>
      <div className="div-footer">
        <Footer/>
      </div>
      </Parallax>


      </body>


    </div>

  );
}

export default App;
