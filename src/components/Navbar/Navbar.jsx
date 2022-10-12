import React from 'react'
import "./Navbar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand ml-4 font-weight-bold" href="/"><FontAwesomeIcon icon={faCoffee} color="#5228a7" /> Esatatery</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ml-3 mr-3">
                                <a className="nav-link" href="/">Rent</a>
                            </li>
                            <li className="nav-item ml-3 mr-3">
                                <a className="nav-link" href="/">Buy</a>
                            </li>
                            <li className="nav-item ml-3 mr-3">
                                <a className="nav-link" href="/">Sell</a>
                            </li>
                        </ul>
                    </div>
                    <div className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-success my-2 mr-4 my-sm-0" type="submit">Login</button>
                        <button className="btn btn-success my-2 mr-4 my-sm-0" type="submit">Signup</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar