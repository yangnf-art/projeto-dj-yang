import './Hero.css';
import logoGigante from '../assets/logo3.png'; 

export default function Hero() {
  return (
    <section className="hero-container" id="home">
      
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