import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faSyncAlt, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './Toolkit.css'

function Toolkit({button, enableButton, playHandler, resetHandler}) {
    return (
        <div className="controller-container">
            <FontAwesomeIcon
                className={"btn-icon" + (enableButton ? "" : " disabled")}
                onClick={enableButton ? playHandler : "return false;"}
                icon={button ? faPlay : faPause}
                size={"3x"}
            />
            <FontAwesomeIcon className={"btn-icon"} onClick={resetHandler} icon={faSyncAlt}/>
            <Link to="baraja">
                <FontAwesomeIcon className={"btn-icon"} icon={faImages} size={"3x"}/>
            </Link>
        </div>
        // <div className="bg-white m-3 rounded-1">
        //     <div className="p-3">
        //         <h5>Herramientas de control</h5>
        //         <hr className="m-1"/>
        //         <div className="p-1">
        //             <label>Carta actual:</label>
        //             <span>{card}</span>
        //         </div>
        //         <div className="p-1">
        //             <label>Cartas restantes:</label>
        //             <span>{deckLength}</span>
        //         </div>
        //         <div className="p-1">
        //             <label>Velocidad:</label>
        //             <span>{speed*0.001}s</span>
        //         </div>
        //         <input type="range" className="form-control w-75 mx-auto" min="0.1" step="0.1" max="5" onInput={(e) => setSpeed(e.target.value*1000)}/>
        //         <button
        //             className="btn btn-primary mt-3"
        //             onClick={buttonHandler}
        //         >{button}</button>
        //     </div>
        // </div>
    )
}

Toolkit.propTypes = {
    button: PropTypes.bool,
    enableButton: PropTypes.bool,
    playHandler: PropTypes.func,
    resetHandler: PropTypes.func,
}

export default Toolkit;