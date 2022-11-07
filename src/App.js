import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header';
import { Routes, Route } from "react-router"
// import { Route } from '@mui/icons-material';
import Jouer from './Components/Jouer/Jouer';
import Resultat from './Components/Resultat/Resultat';
import Contacter_nous from './Components/Contacter_nous/Contacter_nous'
import A_propos from './Components/A_propos/A_propos';


function App() {
  return (
    <div className='App' >
      <div className="header_app">
      <Header  />

      </div>
      <div className="body_container_app">

        <Routes>

          <Route path="/" element={<Jouer />} />

          <Route path="Jouer" element={<Jouer />} />
          <Route path="Resultat" element={<Resultat />} />
          <Route path="Contactez_nous" element={<Contacter_nous />} />
          <Route path="A_propos" element={<A_propos />} />


        </Routes>

      </div>


    </div>
  );
}

export default App;
