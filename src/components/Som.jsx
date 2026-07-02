import './Som.css';
export default function Som() {
  return (
    <section className="som-container" id="som">
      
      {/* O CABEÇALHO */}
      <div className="som-header">
        <p className="sobre-tag texto-destaque">// STREAM</p>
        <h2 className="som-titulo">
          OUÇA O <br />
          <span className="texto-destaque">SOM</span>
        </h2>
      </div>

      {/* A GRADE DOS PLAYERS */}
      <div className="som-cards-grid">
        
        {/* CARD DO SPOTIFY */}
        <div className="som-card">
          <div className="card-header">
             {/* texto simples */}
             <h3 className="plataforma-nome">SPOTIFY</h3>
             <span className="link-seta">↗</span>
          </div>
          {/* O PLAYER DO SPOTIFY */}
          <iframe 
            style={{ borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>

        {/* CARD DO SOUNDCLOUD */}
       {/* CARD DO SOUNDCLOUD */}
        <div className="som-card">
          <div className="card-header">
             <h3 className="plataforma-nome">SOUNDCLOUD</h3>
             <span className="link-seta">↗</span>
          </div>
          
          {/* MEU SET OFICIAL */}
          <iframe 
            width="100%" 
            height="166" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay; encrypted-media" 
            style={{ borderRadius: '12px' }}
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A499217451&color=%23ccff00&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
          ></iframe>
        </div>

      </div> 
    </section>
  );
}