import { useState } from 'react';
import axios from 'axios';

function CadastroPet() {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    owner_name: '',
    owner_phone: '',
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
    data.append('species', formData.species);
    data.append('owner_name', formData.owner_name);
    data.append('owner_phone', formData.owner_phone);
    data.append('notes', formData.notes);
    data.append('image', formData.image);


    try {
      await axios.post('http://localhost:3000/pets', data);
      alert('Pet cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar pet:', error);
      alert('Erro ao cadastrar pet.');
    }
  };

  return (
    <div className="container-app">
      <h2>Cadastro de Pet</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="name" placeholder="Nome do Pet" onChange={handleChange} required />
        <input type="text" name="species" placeholder="Espécie" onChange={handleChange} required />
        <input type="text" name="owner_name" placeholder="Nome do Dono" onChange={handleChange} required />
        <input type="text" name="owner_phone" placeholder="Telefone do Dono" onChange={handleChange} required />
        <input type="text" name="notes" placeholder="Observações" onChange={handleChange} />
        <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Cadastrar Pet</button>
      </form>
    </div>
  );
}

export default CadastroPet;
