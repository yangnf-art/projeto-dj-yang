import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logoImagem from '../assets/2dj.png'; 
import './MenuGlobal.css';

export default function MenuGlobal() {
  const [menuAberto, setMenuAberto] = useState(false);
  const alternarMenu = () => setMenuAberto(!menuAberto);

  return (
    <>
      {/* O CABEÇALHO QUE FICA NO TOPO */}
      <header className="menu-global-header">
         <Link to="/">
           <img src={logoImagem} alt="Logo DJ Yang" className="menu-logo" />
         </Link>
         <div className="menu-icon" onClick={alternarMenu}>
           {menuAberto ? '✕' : '≡'}
         </div>
      </header>

      {/* A TELA PRETA DO MENU */}
      {menuAberto && (
        <div className="menu-overlay">
          <nav className="menu-links">
            <Link to="/" onClick={alternarMenu}>Home</Link>
            <Link to="/sobre" onClick={alternarMenu}>Sobre</Link>
            <Link to="/calendario" onClick={alternarMenu}>Agenda</Link>
            <Link to="/orcamento" onClick={alternarMenu}>Orçamento</Link>
          </nav>
        </div>
      )}
    </>
  );
}