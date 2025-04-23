import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import axios from 'axios';
import Menu from '../components/Menu'
function GeradorRelatorio() {
  const { pet_id, pet_name, sitter_id, sitter_name } = useParams();

  const [activity, setActivity] = useState('');
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    console.log('pet_id:', pet_id);
    console.log('sitter_id:', sitter_id);
    console.log('pet_name:', pet_name);
    console.log('sitter_name:', sitter_name);
  }, []);

  const adicionarAtividade = () => {
    if (activity.trim()) {
      setActivityList([...activityList, activity.trim()]);
      setActivity('');
    }
  };

  const finalizarCuidado = async () => {
    if (activityList.length === 0) {
      return alert('Adicione pelo menos uma atividade.');
    }

    const detalhes = activityList.map(item => `- ${item}`).join('\n');

    try {
      await axios.post('http://localhost:3000/care_logs', {
        pet_id,
        sitter_id,
        details: detalhes,
      });

      alert('Cuidado finalizado e log salvo com sucesso!');
      gerarPDF(detalhes);
    } catch (error) {
      console.error('Erro ao salvar o care_log:', error);
      alert('Erro ao salvar o log');
    }
  };

  const gerarPDF = (detalhes) => {
    const doc = new jsPDF();
    doc.text('Relatório de Cuidado', 10, 10);
    doc.text(`Pet: ${pet_name} (ID ${pet_id})`, 10, 20);
    doc.text(`Cuidador: ${sitter_name} (ID ${sitter_id})`, 10, 30);
    doc.text('Atividades:', 10, 40);
    doc.text(detalhes, 10, 50);
    doc.save(`relatorio_pet_${pet_id}.pdf`);
  };

  return (
    <div className="container-app">
      <div className='container-card'>

        <h2>Gerador de Relatório</h2>
        <p><strong>Pet:</strong> {pet_name}</p>
        <p><strong>Cuidador(a):</strong> {sitter_name}</p>

        <input
          type="text"
          placeholder="Digite uma atividade"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={adicionarAtividade} className='btn_login'>Adicionar Atividade</button>

        <ul className='card-detalhes'>
          {activityList.map((a, index) => (
            <li key={index}>{a}</li>
          ))}
        </ul>

        <button onClick={finalizarCuidado} className="btn_login" >
          Finalizar Cuidado
        </button>



      </div>
      <Menu/>
    </div>
  );
}

export default GeradorRelatorio;
