// src/components/Agenda.jsx
import { useState, useEffect } from 'react';
import './Agenda.css'; 

export default function Agenda() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    // Tenta buscar os shows do banco de dados local do navegador
    const showsSalvos = localStorage.getItem('showsYang');
    
    if (showsSalvos) {
      setEventos(JSON.parse(showsSalvos));
    } else {
      
      const showsIniciais = [
        {
          id: 1,
          festa: 'Sunset Sessions',
          local: 'Pipa Beach Club, RN',
          data: '20.JUN',
          horario: '17:00 - 19:30',
          duracao: '2h30m de Set',
          estilo: 'Progressive House'
        },
        {
          id: 2,
          festa: 'Private Label Party',
          local: 'Ponta Negra, Natal - RN',
          data: '18.JUL',
          horario: '23:00 - 02:00',
          duracao: '3h00m de Set',
          estilo: 'Techno / Peak Time'
        }
      ];
      setEventos(showsIniciais);
      localStorage.setItem('showsYang', JSON.stringify(showsIniciais));
    }
  }, []);

  // Se não tiver nenhum show na lista, não precisa desenhar a seção inteira
  if (eventos.length === 0) return null;

  return (
    <section className="agenda-secao" id="agenda" style={{ padding: '50px', backgroundColor: '#050505', borderTop: '1px solid #1a1a1a' }}>
      <div className="agenda-wrapper" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <p className="sobre-tag texto-destaque">// TOUR DATES</p>
        <h2 className="agenda-titulo" style={{ fontSize: '4rem', margin: '0 0 40px 0', color: 'white' }}>
          PRÓXIMOS <span className="texto-destaque">EVENTOS</span>
        </h2>

        <div className="agenda-lista">
          {eventos.map((evento) => (
            <div key={evento.id} className="agenda-item" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1.5fr 1fr', padding: '20px 0', borderBottom: '1px solid #222', alignItems: 'center' }}>
              
              <div className="agenda-data-box">
                <span className="texto-destaque" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{evento.data}</span>
              </div>

              <div className="agenda-info">
                <h3 style={{ margin: '0 0 5px 0', color: 'white' }}>{evento.festa}</h3>
                <p style={{ margin: 0, color: '#888', fontSize: '0.9rem' }}>📍 {evento.local}</p>
              </div>

              <div className="agenda-horario">
                <p style={{ margin: '0 0 5px 0', color: 'white', fontFamily: 'monospace' }}>{evento.horario}</p>
                <p style={{ margin: 0, color: '#666', fontSize: '0.85rem' }}>{evento.duracao}</p>
              </div>

              <div className="agenda-tag">
                <span style={{ border: '1px solid #333', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem', color: '#aaa', fontFamily: 'monospace' }}>
                  {evento.estilo}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}