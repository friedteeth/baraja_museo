import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

function Menu() {
    return (
        <div className="card menu-card">
            <img
                src={`${process.env.PUBLIC_URL}LogoMuseoBlanco.png`}
                className={"menu-img"}
                alt={"Museo de Guadalupe"}
            ></img>
            <div className="card-body">
                <h1 className="card-title">LOTERIA</h1>
                <h6>Figuras femeninas en el arte Barroco de México</h6>
            </div>
            <div className="p-3">
                <Link to="baraja">
                    <FontAwesomeIcon
                        className={"icon-button"}
                        icon={faPlay}
                        size={"3x"}
                    />
                </Link>
            </div>
        </div>
    );
}

export default Menu;