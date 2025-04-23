import'../css/menu.css'

import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div className="menu">
            <Link to={'/home'} className='btn_menu'>
                <img src="../src/assets/img/iconeHome.png" alt="imagem tela inicial" />
            </Link>
            <Link to={'/cadastroCuidador'} className='btn_menu'>
                <img src="../src/assets/img/iconeAddPetSitter.png" alt="imagem tela inicial" />
            </Link>
            <Link to={'/cadastroPet'} className='btn_menu'>
                <img src="../src/assets/img/iconeAddPet.png" alt="imagem tela inicial" />
            </Link>
            <Link  className='btn_menu'>
                <img src="../src/assets/img/iconeFormularioPet2.png" alt="imagem tela inicial" />
            </Link>
            <Link  className='btn_menu'>
                <img className='photo' src="../src/assets/img/adm.jpg" alt="imagem tela inicial" />
            </Link>
        </div>
    )
}


export default Menu;