import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 

import MenuGlobal from './components/Menuglobal';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Som from './components/Som';
import Orcamento from './components/Orcamento';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Calendario from './components/Calendario'; 

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <MenuGlobal />
        
        <Routes>
          <Route path="/" element={<><Hero /><Som /></>} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/calendario" element={<Calendario />} />
          
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}