import React from 'react';
import PropTypes from 'prop-types';

function Toolkit({remainingCard, deck, currentCard, setDeck, setRemainingCards, setCurrentCard}) {
    return (
        <div>
            { remainingCard > 0 ?
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setRemainingCards(remainingCard-1)
                        setDeck(deck.filter(item => item !== currentCard));
                        setCurrentCard(deck[Math.floor(Math.random() * deck.length)]);
                    }}
                >Siguiente Carta</button>
                :
                ''
            }
        </div>
    )
}

Toolkit.propTypes = {
    remainingCard: PropTypes.number,
    deck: PropTypes.object,
    currentCard: PropTypes.string,
    setDeck: PropTypes.func,
    setRemainingCards: PropTypes.func,
    setCurrentCard: PropTypes.func,
}

export default Toolkit;