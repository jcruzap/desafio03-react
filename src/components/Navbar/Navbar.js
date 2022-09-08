import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-success">
                <a class="navbar-brand" href="#">
                    <img src="./clara-logo.png" alt="Logo" width="50" height="30" className="d-inline-block align-text-top" />
                    Clara Joyas
                </a>
                <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <div className="navbar-nav">
                        <a className="nav-link" href="">Incio</a>
                        <a className="nav-link" href="">Nosotros</a>
                        <a className="nav-link" href="">Ubicación</a>
                        <a className="nav-link" href="">Contacto</a>
                    </div>
                </div>
                <CartWidget />
            </nav>
        </>
    )
}

export default Navbar