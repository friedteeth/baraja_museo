import React from 'react';
import PropTypes from 'prop-types';
import './History.css'

function History({history}) {

    return (
        <div className="history pt-4">
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
            
        </div>
    )
}

History.propTypes = {
    history: PropTypes.array
}

export default History;