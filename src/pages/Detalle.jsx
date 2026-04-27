// useParams + useEffect + fetch
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'

function Detalle() {
    const { id } = useParams();
    const [datos, setDatos] = useState(null);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);


    useEffect(() => {
        setCargando(true);

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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

    if (cargando) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

  return (
    <div>
        <div>
            {iniciales}
        </div>

        <h2>{datos.name}</h2>
        <p>ID #{datos.id}</p>
        <p>Email: {datos.email}</p>
        <p>Ciudad: {datos.address.city}</p>
        <p>Empresa: {datos.company.name}</p>
    </div>

  )
}

export default Detalle
