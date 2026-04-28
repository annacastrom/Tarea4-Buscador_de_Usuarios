import { Link } from 'react-router-dom';

function UsuarioCard({ user }) {

  const iniciales = user.name
    .split(' ')
    .map(p => p[0])
    .join('')
    .toUpperCase();

  return (
    <div className="border border-stone-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow bg-white">
      <div className="w-14 h-14 bg-indigo-50 text-indigo-700 flex items-center justify-center rounded-full text-lg font-bold mb-4 border border-indigo-100">
        {iniciales}
      </div>

      <h3 className="text-xl font-bold text-stone-800 mb-1">{user.name}</h3>

      <Link className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center gap-1" to={`/usuario/${user.id}`}>
        Ver detalle →
      </Link>
      <hr />
    </div>
  );
}

export default UsuarioCard;