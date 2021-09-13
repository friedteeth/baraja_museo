import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlay, faPause, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import React from "react";

function Instrucciones() {
    return (
        <div className={"instrucciones-container text-white"}>
            <h1>Instrucciones</h1>
            <ul className={"text-start"}>
                <li>
                    <b>Iniciar/Pausar</b> - Para iniciar con las cartas da clic
                    en <FontAwesomeIcon className={"icon-color"} icon={faPlay}/>.
                    Para pausar las cartas da clic en <FontAwesomeIcon className={"icon-color"} icon={faPause}/>.
                </li>
                <li>
                    <b>Reiniciar</b> - Para reiniciar las cartas da clic en <FontAwesomeIcon className={"icon-color"} icon={faSyncAlt}/>.
                </li>
                <li>
                    <b>Velocidad</b> - Arrastra la barra <img className={"slider-img"} src={`${process.env.PUBLIC_URL}slider.png`}></img>.
                </li>
                <li>
                    <b>Historial</b> - Puedes ver el historial de cartas que han pasado dando clic en <FontAwesomeIcon className={"icon-color"} icon={faImages}/>.
                </li>
            </ul>
        </div>
    );
}

export default Instrucciones;