import React, { useState } from 'react';
// import Card from '../Card/Card';
import DeckController from  './DeckController';
import cardSet from '../../card_set';
import History from '../History/History';
import './Deck.css';
import {shuffleArray, useInterval} from '../../utils/utils';
// import anime from 'animejs';

function Deck() {
    const TOTAL_CARDS = 52;
    const [deck, setDeck] = useState(() => {
        let newDeck = [...cardSet];
        shuffleArray(newDeck);
        return newDeck;
    });
    const [card, setCard] = useState('red_back');
    const [cardsQueue, setCardsQueue] = useState([card]);
    const [history, setHistory] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [speed, setSpeed] = useState(5000);
    const [play, setPlay] = useState(false);
    const [button, setButton] = useState("Comenzar");
    const updateDeck = () => {
        deck.splice(0, 1);
        setDeck(deck);
    };

    const resetDeck = () => {
        setDeck(() => {
            let newDeck = [...cardSet];
            shuffleArray(newDeck);
            return newDeck;
        });
        setCard('red_back');
        setHistory([])
        setIsRunning(true);
        setButton("Pausar")
    }

    const nextCard = () => {
        if (card == 'red_back') {
            setCard(deck[0]);
            setCardsQueue(() => {
                if (cardsQueue.length > 1) {
                    cardsQueue.splice(0, 1);
                }
                let newCardsQueue = cardsQueue.slice(0);
                newCardsQueue.unshift(deck[0]);
                return newCardsQueue;
            });
            setPlay(true);
        } else {
            updateDeck();
            if(deck.length <= 0) {
                setIsRunning(false);
                setButton("Reiniciar");
            } else {
                setCard(deck[0]);
                setCardsQueue(() => {
                    if (cardsQueue.length > 1) {
                        cardsQueue.splice(1, 1);
                    }
                    let newCardsQueue = cardsQueue.slice(0);
                    newCardsQueue.unshift(deck[0]);
                    return newCardsQueue;
                });
                setPlay(true);
            }
            setHistory(history.concat(card));
        }
    };

    const buttonHandler = () => {
        if (deck.length <= 0) {
            resetDeck();
        } else {
            setButton(isRunning ? "Comenzar" : "Pausar");
            setIsRunning(!isRunning);
        }
    }

    useInterval(nextCard, isRunning ? speed : null);

    return (
        <div>
            <div>
                <div className="input-group form-group">
                    <input type="range" className="form-control" min="0.1" step="0.1" max="5" onInput={(e) => setSpeed(e.target.value*1000)}/>
                    <button
                        className="btn btn-primary"
                        onClick={buttonHandler}
                    >{button}</button>
                </div>
            </div>
            <div>
                {card} | {speed * 0.001}s | {deck.length}/{TOTAL_CARDS}
            </div>
            <DeckController
                cardsQueue={cardsQueue}
                play={play}
                speed={speed}
            ></DeckController>
            { deck.length <= 0 ? <History history={history}></History> : ''}
        </div>
    )
}

export default Deck;