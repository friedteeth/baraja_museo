import React, { useState } from 'react';
import Card from '../Card/Card';
// import Toolkit from '../Toolkit/Toolkit';
import cardSet from '../../card_set';

function Deck() {
    const TOTAL_CARDS = 52;
    const [remainingCards, setRemainingCards] = useState(TOTAL_CARDS);
    const [currentCard, setCurrentCard] = useState('red_back');
    const [deck, setDeck] = useState(cardSet);

    return (
        <div>
            <Card currentCard={currentCard}></Card>
            { remainingCards > 0 ?
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setRemainingCards(remainingCards-1);
                        setDeck(deck.filter(item => item !== currentCard));
                        setCurrentCard(deck[Math.floor(Math.random() * deck.length)]);
                    }}
                >Siguiente Carta</button>
                :
                ''
            }
            <div>
                {remainingCards}/{TOTAL_CARDS}
            </div>
        </div>
    )
}

export default Deck;