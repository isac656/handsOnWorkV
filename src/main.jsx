import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './telas/Login'
import Home from './telas/Home'
import Detalhes from './telas/Detalhes'
import CadastroCuidador from './telas/CadastroCuidador'
import CadastroPet from './telas/CadastroPet'
import Cuidadores from './telas/Cuidadores'
import GeradorRelatorio from './telas/GeradorRelatorio'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/> ,
  },
  {
    path: '/home',
    element: <Home/> ,
  },
  {
    path: 'detalhes/:id',
    element: <Detalhes/> ,
  },
  {
    path: '/cadastroPet',
    element: <CadastroPet/> ,
  },
  {
    path: '/cadastroCuidador',
    element: <CadastroCuidador/> ,
  },
  {
    path: '/cuidadores/:id/:pet_name',
    element: <Cuidadores/> ,
  },
  {
    path: '/geradorRelatorio/:pet_id/:sitter_id/:pet_name/:sitter_name',
    element: <GeradorRelatorio/> ,
  },
])






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
