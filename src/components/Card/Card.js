// import React, { useState } from 'react';
import React from 'react';
// import red_back from '../../assets/deck/red_back.png';
import PropTypes from 'prop-types';

function Card({currentCard}) {
    // const [cardPNG, setCardPNG] = useState(red_back);

    // console.log(currentCard);
    // import('../../assets/deck/' + {currentCard} + '.png')
    // import('../../assets/deck/red_back.png')
    //     .then((card) => {
    //         console.log(typeof card);
    //         console.log(card);
    //         setCardPNG(card)
    //     });

    return (
        <div>
            {/* <img src={cardPNG} alt={currentCard} /> */}
            <img src={process.env.PUBLIC_URL + 'deck/' + currentCard + '.png'} alt={currentCard} width={"200px"}/>
        </div>
    )
}

Card.propTypes = {
    currentCard: PropTypes.string
}

export default Card;