import React, { useState } from 'react';
// import Card from '../Card/Card';
import DeckController from  './DeckController';
import cardSet from '../../card_set';
import History from '../History/History';
import Toolkit from '../Toolkit/Toolkit';
import Navbar from '../Navbar/Navbar';
import './Deck.css';
import {shuffleArray, useInterval} from '../../utils/utils';
// import anime from 'animejs';

function Deck() {
    // const TOTAL_CARDS = 52;
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
            setButton(isRunning ? "Continuar" : "Pausar");
            setIsRunning(!isRunning);
        }
    }

    useInterval(nextCard, isRunning ? speed : null);

    return (
        <div>
            <Navbar></Navbar>
            <div className="row pt-1 m-0">
                <div className="col-md-8">
                    <DeckController
                        cardsQueue={cardsQueue}
                        play={play}
                        speed={speed}
                    ></DeckController>  
                    <img
                        id="base_img"
                        src={`${process.env.PUBLIC_URL}deck/red_back.png`}
                        alt={"red_back"}
                        width={"200px"}
                    />
                </div>
                <div className="col-md-4">
                    <Toolkit
                        card={card}
                        button={button}
                        speed={speed}
                        deckLength={deck.length}
                        buttonHandler={buttonHandler}
                        setSpeed = {setSpeed}
                    ></Toolkit>
                </div>
            </div>
            { deck.length <= 0 ? <History history={history}></History> : ''}
        </div>
    )
}

export default Deck;