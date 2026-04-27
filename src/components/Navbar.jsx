import { Link } from 'react-router-dom';
import React from 'react'

function Navbar() {
    return (
        <nav style={{ marginBottom: "20px" }}>
            <Link to="/">Inicio</Link>
            <Link to="/usuarios">Usuarios</Link>
        </nav>

    )
}

export default Navbar;