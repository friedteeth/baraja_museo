import React from 'react';
import PropTypes from 'prop-types';

function History({history}) {

    return (
        <div className="row">
            {history.map((card, index) => {
                return (
                    <div key={"key-" + index} className="col mb-4">
                        <img src={process.env.PUBLIC_URL + 'deck/' + card + '.png'} alt={card} width={"75px"}/>
                    </div>
                );
            })}
            
        </div>
    )
}

History.propTypes = {
    history: PropTypes.array
}

export default History;