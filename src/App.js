
import './App.css';
// Componentes
import CardUI from './componentes/cards/cards';
import Navbar from './componentes/Navbar/Navbar';
import Usuarios from './componentes/Usuarios/Usuarios'
import Contador from './componentes/Contador/Contador'

const App = () => {
  



  return (
  <>
  <h1>Escribiendo JSX</h1>
  <Navbar />
  <div className="Cards-container">
  <CardUI
            about="Federico es un musico de la ciudad de Rosario"
            img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            name="Federico Romano"
            date="Usuario activo desde Enero 2019"

          />
          <CardUI
            about="Pablo es un ajedrecista profesional de la ciudad de Córdoba"
            img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
            name="Pablo Rodriguez"
            date="Usuario activo desde Enero 2021"

          />
          <CardUI
            about="Jose es un medico cirujano de la ciudad de Barranquilla"
            img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            name="Jose Ramirez"
            date="Usuario activo desde Enero 2018"

          />
          <CardUI
            about="Daniel es un desarrollador frontend de la ciudad de Buenos Aires"
            img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
            name="Daniel Di Salvo"
            date="Usuario activo desde Enero 2017"
          />
          </div>
          <div className="Usuarios-container">
          <Usuarios />
        </div>
        <div>
          <Contador />
        </div>

</>
  );
};

export default App;
