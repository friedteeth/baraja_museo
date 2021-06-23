import React, { useState, useEffect, useRef } from 'react';
import Card from '../Card/Card';
import cardSet from '../../card_set';
import History from '../History/History';
// import anime from 'animejs';

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay])
}

function Deck() {
    const TOTAL_CARDS = 52;
    const [deck, setDeck] = useState([...cardSet]);
    const [currentCard, setCurrentCard] = useState('red_back');
    // const [followingCard, setFollowingCard] = useState(deck[Math.floor(Math.random() * deck.length)]);
    const [history, setHistory] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [speed, setSpeed] = useState(5000);
    const [button, setButton] = useState("Comenzar");
    const updateDeck = () => {
        let i = deck.indexOf(currentCard);
        deck.splice(i, 1);
        setDeck(deck);
    };

    const resetDeck = () => {
        console.log(cardSet);
        setDeck([...cardSet]);
        setCurrentCard('red_back');
        setHistory([])
        setIsRunning(true);
        setButton("Pausar")
    }

    const nextCard = () => {
        // console.log(currentCard, speed);
        if(currentCard == 'red_back') {
            setCurrentCard(deck[Math.floor(Math.random() * deck.length)]);
            // setFollowingCard(deck[Math.floor(Math.random() * deck.length)]);
        } else {
            updateDeck();
            if(deck.length <= 0) {
                setIsRunning(false);
                setButton("Reiniciar");
            } else {
                setCurrentCard(deck[Math.floor(Math.random() * deck.length)]);
                // setFollowingCard(deck[Math.floor(Math.random() * deck.length)]);
                setHistory(history.concat(currentCard));
            }
        }
        // console.log(currentCard, followingCard);
    };

    // const animate = () => {
    //     anime({
    //         targets: '.top-card',
    //         translateX: -300,
    //         complete: (animation) => {
    //             animation.reset();
    //             nextCard();
    //         }
    //     });
    // }

    useInterval(nextCard, isRunning ? speed : null);

    return (
        <div className="row">
            <div className="col-4 offset-4">
                <Card currentCard={currentCard}></Card>
                {deck.length}/{TOTAL_CARDS}
            </div>
            <div className="col-2 d-flex align-items-center">
                <div className="input-group">
                    <input type="range" className="form-control" min="0.1" step="0.1" max="5" onInput={(e) => setSpeed(e.target.value*1000)}/>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            console.log(deck.length);
                            if (deck.length <= 0) {
                                resetDeck();
                                setButton("Comenzar");
                            } else {
                                setButton(isRunning ? "Comenzar" : "Pausar");
                                setIsRunning(!isRunning);
                            }
                            // anime({
                            //     targets: '#'+currentCard,
                            //     translateX: -300,
                            //     complete: () => {
                            //     }
                            // });
                        }}
                    >{button}</button>
                </div>
            </div>
            { deck.length <= 0 ?
                <History history={history}></History>
                :
                ''
            }
        </div>
    )
}

export default Deck;