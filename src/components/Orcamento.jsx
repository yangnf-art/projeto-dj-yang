import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import './Orcamento.css';

export default function Orcamento() {
  // PEGAR A DATA DO CALENDÁRIO 
  const location = useLocation();
  const dataVindaDoCalendario = location.state?.dataEscolhida || '';

  // AS MEMÓRIAS DA CALCULADORA
  const [duracao, setDuracao] = useState(6); 
  const [iluminacao, setIluminacao] = useState(false);
  const [upgradeSom, setUpgradeSom] = useState(false);
  const [setTematico, setSetTematico] = useState(false);
  const [total, setTotal] = useState(0);

  // STATE DO FORMULÁRIO E ENVIO 
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: dataVindaDoCalendario, 
    detalhes: ''
  });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    let valorBase = 300; 
    let calculo = valorBase + (duracao * 100); 
    
    if (iluminacao) calculo += 200;
    if (upgradeSom) calculo += 300;
    if (setTematico) calculo += 200;

    setTotal(calculo);
  }, [duracao, iluminacao, upgradeSom, setTematico]);

  // --- FUNÇÕES DO FORMULÁRIO ---
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="orcamento-container" id="orcamento">
      <p className="sobre-tag texto-destaque">// SESSION BUILDER</p>
      <h2 className="orcamento-titulo">
        MONTE SEU <br />
        <span className="texto-destaque">ORÇAMENTO</span>
      </h2>

      {/* RENDERIZAÇÃO CONDICIONAL*/}
      {enviado ? (
        
        <div style={{ backgroundColor: '#111111', padding: '50px', border: '1px solid #ccff00', borderRadius: '8px', textAlign: 'center', marginTop: '40px' }}>
          <h3 className="texto-destaque" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Solicitação Enviada!</h3>
          <p style={{ fontSize: '1.2rem', color: '#ccc' }}>Obrigado pelo contato, <strong>{form.nome}</strong>.</p>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginTop: '10px' }}>
            Sua consulta para a data <strong>{form.data}</strong> com um set de {duracao}h foi registrada.
            A nossa equipe entrará em contato pelo número {form.telefone}.
          </p>
        </div>

      ) : (

        <div className="orcamento-conteudo">
          
          <div className="controles-area">
            
            <div className="controle-grupo">
              <div className="controle-header">
                <span>DURAÇÃO</span>
                <span className="valor-destaque">{duracao}h</span>
              </div>
              <input 
                type="range" 
                min="2" max="12" 
                value={duracao} 
                onChange={(e) => setDuracao(Number(e.target.value))}
                className="slider"
              />
              <div className="controle-limites"><span>2H</span><span>12H</span></div>
            </div>

            <div className="extras-lista">
              
              <div className="extra-item">
                <div>
                  <p>Iluminação Profissional</p>
                  <span className="extra-preco">+ R$ 200</span>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={iluminacao} onChange={() => setIluminacao(!iluminacao)} />
                  <span className="slider-round"></span>
                </label>
              </div>

              <div className="extra-item">
                <div>
                  <p>Upgrade de Som</p>
                  <span className="extra-preco">+ R$ 300</span>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={upgradeSom} onChange={() => setUpgradeSom(!upgradeSom)} />
                  <span className="slider-round"></span>
                </label>
              </div>

              <div className="extra-item">
                <div>
                  <p>Set Temático</p>
                  <span className="extra-preco">+ R$ 200</span>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={setTematico} onChange={() => setSetTematico(!setTematico)} />
                  <span className="slider-round"></span>
                </label>
              </div>

            </div>

            <div className="investimento-box">
              <p>INVESTIMENTO ESTIMADO</p>
              <h3 className="texto-destaque">R$ {total.toLocaleString('pt-BR')}</h3>
            </div>
          </div>

          <div className="orcamento-form-area">
            {/* Adicionado no form para capturar o envio */}
            <form className="formulario" onSubmit={handleSubmit}>
              <input type="text" name="nome" placeholder="Seu nome *" required value={form.nome} onChange={handleChange} />
              <input type="email" name="email" placeholder="Seu email *" required value={form.email} onChange={handleChange} />
              <input type="text" name="telefone" placeholder="Telefone / WhatsApp *" required value={form.telefone} onChange={handleChange} />
              <input 
                type="text" 
                name="data" 
                placeholder="Data do Evento *" 
                required 
                value={form.data} 
                onChange={handleChange} 
                style={ dataVindaDoCalendario ? { borderColor: '#ccff00', color: '#ccff00', fontWeight: 'bold' } : {} }
              />
              
              <textarea name="detalhes" placeholder="Conte mais sobre seu evento..." rows="4" required value={form.detalhes} onChange={handleChange}></textarea>
              
              <button type="submit" className="btn-enviar">ENVIAR ORÇAMENTO</button>
            </form>
          </div>

        </div>
      )}
    </section>
  );
}