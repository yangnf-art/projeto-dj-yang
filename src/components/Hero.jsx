import { useState } from 'react';
import './Hero.css';
import logoImagem from '../assets/2dj.png'; 
import logoGigante from '../assets/logo3.png'; 

export default function Hero() {
  const [menuAberto, setMenuAberto] = useState(false);
  const alternarMenu = () => setMenuAberto(!menuAberto);

  return (
    <section className="hero-container" id="home">
      
      {/* O TOPO */}
      <header className="hero-header">
         <img src={logoImagem} alt="Logo DJ Yang" className="hero-logo" />
         <div className="menu-icon" onClick={alternarMenu}>
           {menuAberto ? '✕' : '≡'}
         </div>
      </header>

      {/* O MENU RESTAURADO! */}
      {menuAberto && (
        <div className="menu-overlay">
          <nav className="menu-links">
            <a href="#home" onClick={alternarMenu}>Home</a>
            <a href="#sobre" onClick={alternarMenu}>Sobre</a>
            <a href="#som" onClick={alternarMenu}>Música</a>
            <a href="#orcamento" onClick={alternarMenu}>Orçamento</a>
          </nav>
        </div>
      )}

      {/* O MEIO DA TELA */}
      <img src={logoGigante} alt="YANG" className="logo-centro" />

      {/* A BASE */}
      <div className="hero-bottom-left">
         <p className="subtitle texto-destaque">● PRESSKIT</p>
      </div>

      <div className="scroll-wrapper">
         <p className="scroll-text">S C R O L L</p>
         <div className="scroll-linha"></div>
      </div>

    </section>
  );
}