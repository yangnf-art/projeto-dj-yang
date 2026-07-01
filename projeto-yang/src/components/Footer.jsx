import { Link } from 'react-router-dom';
import './Footer.css';
import logoImagem from '../assets/logo3.png'; 

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* COLUNA 1: ARTISTA */}
        <div className="footer-coluna">
          <h4 className="footer-titulo">ARTISTA</h4>
          <img src={logoImagem} alt="DJ Yang" className="footer-logo" />
        </div>

        {/* COLUNA 2: CONTATO */}
        <div className="footer-coluna">
          <h4 className="footer-titulo">CONTATO</h4>
          <p>yangnf23@gmail.com</p>
          <p></p>
        </div>

        {/* COLUNA 3: PLATAFORMAS */}
        <div className="footer-coluna">
          <h4 className="footer-titulo">PLATAFORMAS</h4>
          <a href="https://open.spotify.com/artist/yang-fagundes" target="_blank" rel="noopener noreferrer" className="footer-link">
            Spotify
          </a>
          <a href="https://soundcloud.com/yang-fagundes" target="_blank" rel="noopener noreferrer" className="footer-link">
            SoundCloud
          </a>
          <a href="https://instagram.com/_yangnf" target="_blank" rel="noopener noreferrer" className="footer-link">
            Instagram
          </a>
        </div>

        {/* COLUNA 4: NAVEGAÇÃO INTERNA */}
        <div className="footer-coluna">
          <h4 className="footer-titulo">NAVEGAÇÃO</h4>
          <Link to="/sobre" className="footer-link">Bio</Link>
          <Link to="/" className="footer-link">Playlists</Link>
          <Link to="/orcamento" className="footer-link">Orçamento</Link>
        </div>

      </div>

      {/* BARRA INFERIOR */}
      <div className="footer-bottom">
        <p>© 2026 YANG. TODOS OS DIREITOS RESERVADOS.</p>
        <p>TECHNICAL RIDER v1.0</p>
      </div>
    </footer>
  );
}