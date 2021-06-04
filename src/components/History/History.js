import React from 'react';
import PropTypes from 'prop-types';

function History({history}) {
    console.log("History 2", history);

    return (
        <div className="row">
            {history.map((card, index) => {
                return (
                    <div key={"key-" + index} className="col">
                        <img src={process.env.PUBLIC_URL + 'deck/' + card + '.png'} alt={card} width={"70px"}/>
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