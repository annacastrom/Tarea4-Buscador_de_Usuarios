import { Link } from 'react-router-dom';
import React from 'react'

function Navbar() {
    return (
        <nav className="bg-indigo-700 text-white px-8 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold leading-tight">
                🔎 Buscador de <br />Usuarios
            </h1>

            <div className="flex items-center gap-2 text-lg font-medium text-indigo-100">
                <Link to="/" className="hover:text-white transition-colors text-lg">Inicio</Link>

                <span className="text-indigo-300">·</span>

                <Link to="/usuarios" className="hover:text-white transition-colors text-lg">Usuarios</Link>
            </div>
        </nav>

    )
}

export default Navbar;