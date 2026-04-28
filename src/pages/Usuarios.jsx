import { useState, useEffect } from 'react';
import UsuarioCard from '../components/UsuarioCard';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar usuarios");
        return res.json();
      })
      .then((json) => {
        setUsuarios(json);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

    if (cargando) return <div className="p-8 text-center text-stone-500 text-lg"> Cargando... </div>
    if (error) return <div className="p-8 text-center text-red-500 text-lg font-medium">{error}</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-stone-800 mb-8 border-b border-stone-100 pb-2">📃 Lista de Usuarios</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {usuarios.map((user) => (
            <UsuarioCard key={user.id} user={user} />
        ))}
    </div>
    </div>
  );
}

export default Usuarios;