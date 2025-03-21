import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Libro from './libro'
import Usuario from './usario'
import Prestamo from './prestamo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Libro />
    <Usuario/>
    <Prestamo/>
  </StrictMode>,
)
