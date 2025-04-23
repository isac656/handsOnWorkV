import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Menu from '../components/Menu'
import '../css/estilo-app.css'
import { Link } from 'react-router-dom';

function Detalhes() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  const caminho = "http://localhost:3000/ertyu  "
  useEffect(() => {
    
    axios.get(`http://localhost:3000/pets/${id}`)
      .then(res => {
        setPet(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar detalhes do pet:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!pet) return <p>Pet não encontrado</p>;

  return (
    <div className='container-app '>
      <div className='card-detalhes'>
        <div className='dados_iniciais'>
          <img src={`${caminho}${pet.image_path}`}alt="foto do pet" />
          <span>
            <p><strong>Nome:</strong> {pet.name}</p>
            <p><strong>Dono:</strong> {pet.owner_name}</p>
            <p><strong>Espécie:</strong> {pet.species}</p>
          </span>
        </div>

        <p><strong>Telefone:</strong> {pet.owner_phone}</p>
        <p><strong>Notas:</strong> {pet.notes}</p>

        <Link to={`/cuidadores/${pet.id}/${pet.name}`} className='btn_inicio_cuidado'>
          cuidar
        </Link>
      </div>

      <Menu />
    </div>

  );
}

export default Detalhes;