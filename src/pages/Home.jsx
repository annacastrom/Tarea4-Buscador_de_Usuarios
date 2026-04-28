// Input + botón buscar
import { useNavigate, Link} from 'react-router-dom';
import { useState } from 'react';
import React from 'react'

function Home() {
  const [id, setId] = useState('');
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
    <div className='p-8 space-y-6'>
        <div className="buscador-formulario">
            <h3 className="text-2xl font-bold text-stone-800">👤 Buscar usuario</h3>

            <p className="text-stone-500 text-lg">Selecciona un ID del 1 al 10</p>
        <div className="flex gap-4">
            <input
                placeholder='ID entre 1 y 10'
                type="number"
                min="1"
                max="10"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="flex-1 bg-stone-100 border border-stone-300 rounded-xl px-4 py-3 text-stone-700 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button onClick={handleBuscar} className="bg-indigo-600 text-white text-xl font-bold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-all">
                Buscar →
            </button>
        </div>
        </div>
        
            <Link to="/usuarios" className="buscador-link-todos-usuarios">
                Ver todos los usuarios
            </Link>
    </div>
  );
}

export default Home;