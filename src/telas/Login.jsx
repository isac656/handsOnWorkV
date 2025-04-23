import '../css/estilo-app.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  // Cria usuário admin no localStorage ao carregar o app
  useEffect(() => {
    const admin = localStorage.getItem('adminUser');
    if (!admin) {
      localStorage.setItem('adminUser', JSON.stringify({ usuario: 'admin', senha: '1234' }));
    }
  }, []);

  const handleLogin = () => {
    const admin = JSON.parse(localStorage.getItem('adminUser'));
    if (usuario === admin.usuario && senha === admin.senha) {
      navigate('/home');
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="container-app">
      <img src="../src/assets/img/iconePetSitter.png" alt="" />
      <input
        type="text"
        placeholder="usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin} className="btn_login">
        Login
      </button>
    </div>
  );
}

export default Login;
