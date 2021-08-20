import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './History.css'

function History({history}) {

    return (
        <div className="history">
            <h2 className="text-white">Historial de cartas</h2>
            {history.map((card, index) => {
                return (
                    <img
                        key={"key-" + index}
                        className="m-1"
                        src={process.env.PUBLIC_URL + 'deck/' + card + '.png'}
                        alt={card}
                        width={"50px"}
                    />
                );
            })}
            <div>
                <Link to="baraja">
                    <FontAwesomeIcon className={"icon-button"} icon={faPlay} size={"2x"}/>
                </Link>
            </div>
        </div>
    )
}

History.propTypes = {
    history: PropTypes.array
}

export default History;