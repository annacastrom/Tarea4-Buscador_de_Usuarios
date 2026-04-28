// useParams + useEffect + fetch
import { useParams, Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'

function Detalle() {
    const { id } = useParams();
    const [datos, setDatos] = useState(null);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);


    useEffect(() => {
        setCargando(true);

        fetch(`https://jsonplaceholder.typicode.com/users/${Number(id)}`)
            .then((res) => {
                if (!res.ok) throw new Error('Usuario no encontrado');
                return res.json();
            })
            .then((json) => {
                if (!json || !json.id) {
                    throw new Error("Usuario no válido");
                }
                setDatos(json);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setDatos(null);
            })
            .finally(() => {
                setCargando(false);
            });
    }, [id]);


    const iniciales = datos ? datos.name.split(' ').map(p => p[0]).join('').toUpperCase() : "";

    if (cargando) return <div className="p-8 text-center text-stone-500 text-lg"> Cargando... </div>
    if (error) return <div className="p-8 text-center text-red-500 text-lg font-medium">{error}</div>

  return (
    <div className="p-8 space-y-6 ">
        <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-700 flex items-center justify-center rounded-full text-xl font-bold border border-indigo-100 ">
                {iniciales}
            </div>

            <div>
                <h2 className="text-2xl font-bold text-stone-800">{datos.name}</h2>
                <p className="text-xl text-stone-500">ID #{datos.id}</p>
            </div>
        </div>
            <div className="space-y-4 pt-6">
                <div className="space-y-4 pt-4 text-xl ">
                    <div className="flex justify-between w-full">
                        <span className="text-stone-500 font-bold">Email</span>
                        <span className="text-indigo-700 font-medium">{datos.email}</span>
                    </div>
                    
                    <div className="flex justify-between w-full">
                        <span className="text-stone-500 font-bold">Ciudad</span>
                        <span className="text-stone-800 ">{datos.address.city}</span>
                    </div>

                    <div className="flex justify-between w-full">
                        <span className="text-stone-500 font-bold">Empresa</span>
                        <span className="text-stone-800">{datos.company.name}</span>
                    </div>
                    
            </div>

        </div>
        <Link to="/" className="text-indigo-700 mt-6 inline-block text-xl"> ← Regresar a inicio</Link>
    </div>
  )
}

export default Detalle