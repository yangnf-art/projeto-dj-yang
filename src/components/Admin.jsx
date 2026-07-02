import { useState, useEffect } from 'react';
import dadosIniciais from './Datasmock.json';

export default function Admin() {
  // Estados da Agenda Semanal (Dias)
  const [agenda, setAgenda] = useState([]);
  
  // Estados dos Próximos Shows (Tour)
  const [shows, setShows] = useState([]);
  const [novoShow, setNovoShow] = useState({ festa: '', local: '', data: '', horario: '', duracao: '', estilo: '' });

  useEffect(() => {
    // Carrega Dias
    const diasSalvos = localStorage.getItem('agendaYang');
    if (diasSalvos) setAgenda(JSON.parse(diasSalvos));
    else setAgenda(dadosIniciais);

    // Carrega Shows
    const showsSalvos = localStorage.getItem('showsYang');
    if (showsSalvos) setShows(JSON.parse(showsSalvos));
  }, []);

  // LÓGICA DOS DIAS DA SEMANA 
  const alternarStatus = (idClicado) => {
    const novaAgenda = agenda.map(item => {
      if (item.id === idClicado) return { ...item, status: item.status === 'Disponivel' ? 'Ocupado' : 'Disponivel' };
      return item;
    });
    setAgenda(novaAgenda);
    localStorage.setItem('agendaYang', JSON.stringify(novaAgenda));
  };

  // LÓGICA DOS SHOWS
  const adicionarShow = (e) => {
    e.preventDefault();
    const showComId = { ...novoShow, id: Date.now() }; 
    const novaListaShows = [...shows, showComId];
    
    setShows(novaListaShows);
    localStorage.setItem('showsYang', JSON.stringify(novaListaShows));
    
    // Limpa os campos após salvar
    setNovoShow({ festa: '', local: '', data: '', horario: '', duracao: '', estilo: '' });
  };

  const deletarShow = (idParaDeletar) => {
    const novaListaShows = shows.filter(show => show.id !== idParaDeletar);
    setShows(novaListaShows);
    localStorage.setItem('showsYang', JSON.stringify(novaListaShows));
  };

  return (
    <section className="calendario-page" style={{ padding: '150px 50px', minHeight: '100vh' }}>
      <div className="calendario-container">
        
        <h2 className="calendario-titulo" style={{ fontSize: '3rem', marginBottom: '50px' }}>
          PAINEL <span className="texto-destaque" style={{color: '#ff4444'}}>ADMIN</span>
        </h2>

        {/* BLOCO 1: DIAS DA SEMANA */}
        <h3 style={{ color: 'white', borderBottom: '1px solid #333', paddingBottom: '10px' }}>1. Bloquear Datas Semanais</h3>
        <div className="grid-calendario" style={{ marginBottom: '60px' }}>
          {agenda.map((item) => (
            <div key={item.id} className="card-dia" style={{ border: '1px solid #444', padding: '15px' }}>
              <h3 style={{ fontSize: '1.2rem' }}>{item.dia} ({item.status})</h3>
              <button 
                onClick={() => alternarStatus(item.id)}
                style={{
                  padding: '8px', marginTop: '10px', width: '100%', fontWeight: 'bold', cursor: 'pointer',
                  backgroundColor: item.status === 'Disponivel' ? '#ccff00' : '#ff4444', color: 'black', border: 'none'
                }}
              >
                Mudar para {item.status === 'Disponivel' ? 'Ocupado' : 'Disponível'}
              </button>
            </div>
          ))}
        </div>

        {/* BLOCO 2: CADASTRAR SHOWS */}
        <h3 style={{ color: 'white', borderBottom: '1px solid #333', paddingBottom: '10px' }}>2. Adicionar Próximo Show (Tour)</h3>
        
        <form onSubmit={adicionarShow} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '40px' }}>
          <input type="text" placeholder="Nome da Festa (Ex: Pipa Sun)" required value={novoShow.festa} onChange={e => setNovoShow({...novoShow, festa: e.target.value})} style={{ padding: '10px', backgroundColor: '#111', color: 'white', border: '1px solid #333' }}/>
          <input type="text" placeholder="Local (Ex: Natal - RN)" required value={novoShow.local} onChange={e => setNovoShow({...novoShow, local: e.target.value})} style={{ padding: '10px', backgroundColor: '#111', color: 'white', border: '1px solid #333' }}/>
          <input type="text" placeholder="Data (Ex: 24.AGO)" required value={novoShow.data} onChange={e => setNovoShow({...novoShow, data: e.target.value})} style={{ padding: '10px', backgroundColor: '#111', color: 'white', border: '1px solid #333' }}/>
          <input type="text" placeholder="Horário (Ex: 23:00)" value={novoShow.horario} onChange={e => setNovoShow({...novoShow, horario: e.target.value})} style={{ padding: '10px', backgroundColor: '#111', color: 'white', border: '1px solid #333' }}/>
          <input type="text" placeholder="Duração (Ex: 2h de Set)" value={novoShow.duracao} onChange={e => setNovoShow({...novoShow, duracao: e.target.value})} style={{ padding: '10px', backgroundColor: '#111', color: 'white', border: '1px solid #333' }}/>
          <input type="text" placeholder="Estilo (Ex: Techno)" value={novoShow.estilo} onChange={e => setNovoShow({...novoShow, estilo: e.target.value})} style={{ padding: '10px', backgroundColor: '#111', color: 'white', border: '1px solid #333' }}/>
          
          <button type="submit" style={{ gridColumn: 'span 2', padding: '15px', backgroundColor: '#ccff00', color: 'black', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>+ ADICIONAR SHOW NA AGENDA</button>
        </form>

        {/* --- LISTA DE SHOWS PARA DELETAR --- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {shows.map(show => (
            <div key={show.id} style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#111', padding: '15px', border: '1px solid #333' }}>
              <span style={{ color: 'white' }}><strong>{show.data}</strong> - {show.festa} ({show.local})</span>
              <button onClick={() => deletarShow(show.id)} style={{ backgroundColor: '#ff4444', color: 'white', border: 'none', padding: '5px 15px', cursor: 'pointer' }}>Excluir</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}