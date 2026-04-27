// Input + botón buscar
import { useNavigate, Link} from 'react-router-dom';
import { useState } from 'react';
import React from 'react'

function Home() {
  const [id, setId] = useState(1);
  const navigate = useNavigate();
  
  function handleBuscar() {
    const numero = Number(id);

    if (numero < 1 || numero > 10) {
      alert('Por favor, ingresa un ID válido entre 1 y 10');
      return;
    }

    navigate(`/usuario/${id}`);
  }

  return (
    <div className='buscador-contenedor'>
        <div className="buscador-header">
            <h1 className="buscador-titulo">Buscador de Usuarios</h1>
            <p className="buscador-ubicacion">Inicio</p>
        </div>

        <div className="buscador-formulario">
            <h3 className="buscador-subtitulo">Buscar usuario</h3>

            <p className="buscador-instrucciones">Selecciona un ID del 1 al 10</p>

            <input
                placeholder='ID entre 1 y 10'
                type="number"
                min="1"
                max="10"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            <button className="buscador-boton" onClick={handleBuscar}>
                Buscar →
            </button>
        </div>
        
            <Link to="/usuarios" className="buscador-link-todos-usuarios">
                Ver todos los usuarios
            </Link>
    </div>
  );
}

export default Home;