import { useState } from 'react';
import axios from 'axios';

function CadastroCuidador() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('notes', formData.notes);
    data.append('image', formData.image);

    try {
      await axios.post('http://localhost:3000/sitters', data);
      alert('Cuidador cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar cuidador:', error);
      alert('Erro ao cadastrar cuidador.');
    }
  };

  return (
    <div className="container-app">
      <h2>Cadastro de Cuidador</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="name" placeholder="Nome" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Celular" onChange={handleChange} required />
        <input type="text" name="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="notes" placeholder="Observações" onChange={handleChange} rows={4}></textarea>
        <input type="file" name="image" accept="image/*" onChange={handleFileChange} required />
        <button type="submit">Cadastrar Cuidador</button>
      </form>
    </div>
  );
}

export default CadastroCuidador;
