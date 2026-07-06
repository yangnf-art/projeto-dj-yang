import './Sobre.css'; 
import fotoYangRed from '../assets/yang1.jpg'; 

export default function Sobre() {
  return (
    <section className="sobre-secao" id="sobre">
      <div className="sobre-container-grid">
        
        {/* LADO ESQUERDO CONTEÚDO DE TEXTO */}
        <div className="sobre-coluna-texto">
          <p className="sobre-tag texto-destaque">// THE CHRONICLE</p>
          
          <h2 className="sobre-titulo">
            SOBRE O <br />
            <span className="texto-destaque">ARTISTA</span>
          </h2>

          <div className="sobre-bio">
            <p>
              Artista, DJ e produtor musical com mais de 13 anos de experiência em eventos 
              exclusivos, clubs e festivais.
            </p>
            <p>
              Especializado em House, Tech-house e Progressive, construindo sets adaptados que criam 
              atmosferas únicas e memoráveis para seu evento
            </p>
            <p>
              Já se apresentou em palcos de Natal, João Pessoa e Recife, levando a energia 
              da pista a outro nível.
            </p>
          </div>
        </div>

        {/* LADO DIREITO: A FOTO OCUPANDO */}
        <div className="sobre-coluna-foto">
          <img src={fotoYangRed} alt="DJ Yang" className="foto-perfil-full" />
        </div>

      </div>
    </section>
  );
}