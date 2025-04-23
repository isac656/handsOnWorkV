import Menu from "../components/Menu";
import '../css/estilo-app.css'
import { Link } from "react-router-dom";

import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
    const caminho = "http://localhost:3000/"
    const [pets, setPets] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        axios.get('http://localhost:3000/pets')
            .then(response => {
                setPets(response.data);
                setLoading(false)

            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })

    }, [])

    if (loading) {
        return <div>esta carregando</div>
    }
    return (
        <div className="container-app">
            <div className="container-card">
                <ul className="lista-pets">
                    {pets.map(pets => {
                        return (
                            <li key={pets.id} className="card">
                                <div className="imagem-nome">
                                    <img src={`${caminho}${pets.image_path}`} alt="imagem do pet" />
                                    <p>{pets.name}</p>
                                </div>
                                <Link to={`/detalhes/${pets.id}`} className="btn_detalhes">
                                    detalhes
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <Menu />
        </div>
    )
}


export default Home;