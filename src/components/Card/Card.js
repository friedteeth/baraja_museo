import React from 'react';
import PropTypes from 'prop-types';
// import anime from 'animejs';
import './Card.css';

function Card({card}) {

    return (
        <img
            id={card}
            src={`${process.env.PUBLIC_URL}deck/${card}.png`}
            alt={card}
            width={"200px"}
        />
    )
}

Card.propTypes = {
    card: PropTypes.string,
    animate: PropTypes.bool
}

export default Card;