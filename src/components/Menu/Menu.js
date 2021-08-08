import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

function Menu() {
    return (
        <div className="card menu-card">
            <div className="card-body">
                <h1 className="card-title">LOTERIA</h1>
                <small className="card-subtitle">Figuras femeninas en el arte Barroco de México</small>
            </div>
            <div className="p-3">
                <Link to="baraja">
                    <FontAwesomeIcon icon={faPlay} size={"2x"}/>
                </Link>
            </div>
        </div>
    );
}

export default Menu;