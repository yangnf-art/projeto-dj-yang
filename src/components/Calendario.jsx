import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Calendario.css';
import dadosIniciais from './datasMock.json';
import Agenda from './Agenda'; // Trazendo a Agenda para dentro do Calendário

export default function Calendario() {
  const [agenda, setAgenda] = useState([]);
  const navigate = useNavigate();

  // Lê o banco de dados local para desenhar os dias da semana
  useEffect(() => {
    const dadosSalvos = localStorage.getItem('agendaYang');
    if (dadosSalvos) {
      setAgenda(JSON.parse(dadosSalvos));
    } else {
      setAgenda(dadosIniciais);
    }
  }, []);

  const lidarComSelecao = (item) => {
    if (item.status === "Disponivel") {
      navigate('/orcamento', { state: { dataEscolhida: item.dia } });
    }
  };

  return (
    <section className="calendario-page">
      <div className="calendario-container">
        
        {/* CABEÇALHO DO CALENDÁRIO */}
        <p className="sobre-tag texto-destaque">// BOOKING</p>
        <h2 className="calendario-titulo">
          AGENDA <br />
          <span className="texto-destaque">SEMANAL</span>
        </h2>
        <p className="calendario-subtitulo">Selecione uma data disponível para iniciar seu orçamento.</p>

        {/* GRADE DE SELEÇÃO DOS DIAS */}
        <div className="grid-calendario">
          {agenda.map((item) => (
            <div 
              key={item.id} 
              className={`card-dia ${item.status === 'Ocupado' ? 'bloqueado' : 'livre'}`}
              onClick={() => lidarComSelecao(item)}
            >
              <h3>{item.dia}</h3>
              <span className={`status-tag ${item.status === 'Ocupado' ? 'tag-vermelha' : 'tag-verde'}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* LISTA DE PRÓXIMOS SHOWS */}
        <div style={{ marginTop: '100px' }}>
           <Agenda />
        </div>

      </div>
    </section>
  );
}