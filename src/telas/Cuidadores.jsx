import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Menu from '../components/Menu';
import '../css/estilo-app.css';
import { Link } from 'react-router-dom';

function Cuidadores() {
  const { id, pet_name } = useParams(); // ID do pet
  const [sitters, setSitters] = useState([]);
  const [loading, setLoading] = useState(true);
  const caminho = "http://localhost:3000/"

  useEffect(() => {
    console.log('ID de pet recebido:', id);

    axios.get('http://localhost:3000/sitters')
      .then(response => {
        setSitters(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar sitters:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='container-app'>
      <div className="container-card">
        <ul className='lista_PetSitter'>
          {sitters.map(sitter => (
            <li key={sitter.id} className="card petsitter">
              <Link to={`/geradorRelatorio/${id}/${sitter.id}/${pet_name}/${sitter.name}`}>
                <img src={`${caminho}${sitter.image_path}`} alt="imagem do petsitter" />
                <p>{sitter.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Menu />
    </div>
  );
}

export default Cuidadores;
