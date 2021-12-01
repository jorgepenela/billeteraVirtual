import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';


import Encabezado from './components/Encabezado';
import Home from './components/Home';
import Metodos from './components/Metodos';
import Atencion from './components/Atencion';
import Servicios from './components/Servicios';
import Funcionalidades from './components/Funcionalidades';
import Contacto from './components/Contacto';
import Pie from './components/Pie';
import Video from './components/Video';
import Whatsapp from './components/Whatsapp';




function App() {

  return (    
    <>    
      <main data-scroll-container>
        <Encabezado></Encabezado>
        <Home></Home>
        <Metodos></Metodos>      
        <Atencion></Atencion>      
        <Servicios></Servicios>
        <Video url={'./assets/video-yopit.mp4'}></Video>
        <Funcionalidades></Funcionalidades>      
        <Contacto></Contacto>
        <Pie></Pie>
        <Whatsapp></Whatsapp>
      </main>
    </>
  );
}

export default App;
