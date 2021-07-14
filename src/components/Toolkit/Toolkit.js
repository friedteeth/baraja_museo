import React from 'react';
import PropTypes from 'prop-types';

function Toolkit({card, button, speed, deckLength, buttonHandler, setSpeed}) {
    return (
        <div className="bg-white m-3 rounded-1">
            <div className="p-3">
                <h5>Herramientas de control</h5>
                <hr className="m-1"/>
                <div className="p-1">
                    <label>Carta actual:</label>
                    <span>{card}</span>
                </div>
                <div className="p-1">
                    <label>Cartas restantes:</label>
                    <span>{deckLength}</span>
                </div>
                <div className="p-1">
                    <label>Velocidad:</label>
                    <span>{speed*0.001}s</span>
                </div>
                <input type="range" className="form-control w-75 mx-auto" min="0.1" step="0.1" max="5" onInput={(e) => setSpeed(e.target.value*1000)}/>
                <button
                    className="btn btn-primary mt-3"
                    onClick={buttonHandler}
                >{button}</button>
            </div>
        </div>
    )
}

Toolkit.propTypes = {
    card: PropTypes.string,
    button: PropTypes.string,
    speed: PropTypes.number,
    deckLength: PropTypes.number,
    buttonHandler: PropTypes.func,
    setSpeed: PropTypes.func
}

export default Toolkit;