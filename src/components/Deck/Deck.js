import React, { useState } from 'react';
import DeckController from  './DeckController';
import cardSet from '../../card_set';
import History from '../History/History';
import Toolkit from '../Toolkit/Toolkit';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Instrucciones from '../Instrucciones/Instrucciones';
import Creditos from '../Creditos/Creditos';
import './Deck.css';
import {shuffleArray, useInterval} from '../../utils/utils';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function Deck() {
    const [deck, setDeck] = useState(() => {
        let newDeck = [...cardSet];
        shuffleArray(newDeck);
        return newDeck;
    });
    const [card, setCard] = useState('00');
    const [cardsQueue, setCardsQueue] = useState([card]);
    const [history, setHistory] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [speed, setSpeed] = useState(5000);
    const [play, setPlay] = useState(false);
    const [button, setButton] = useState(true);
    const [enableButton, setEnableButton] = useState(true);
    const updateDeck = () => {
        deck.splice(0, 1);
        setDeck(deck);
    };

    const resetHandler = () => {
        setDeck(() => {
            let newDeck = [...cardSet];
            shuffleArray(newDeck);
            return newDeck;
        });
        setEnableButton(true);
        setCard('00');
        setCardsQueue(['00']);
        setHistory([])
        setIsRunning(false);
        setButton(true)
        setPlay(true);
    }

    const nextCard = () => {
        if (card == '00') {
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
                setButton(true);
                setEnableButton(false);
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

    const playHandler = () => {
        setButton(isRunning);
        setIsRunning(!isRunning);
    }

    useInterval(nextCard, isRunning ? speed : null);

    return (
        <>
            <Navbar></Navbar>
            <div className="app-container">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Menu></Menu>
                        </Route>
                        <Route path="/baraja">
                            <div className="deck-container">
                                <Toolkit
                                    button={button}
                                    enableButton={enableButton}
                                    playHandler={playHandler}
                                    resetHandler={resetHandler}
                                ></Toolkit>
                                <div className="card-container">
                                    <DeckController
                                        cardsQueue={cardsQueue}
                                        play={play}
                                        speed={speed}
                                    ></DeckController>  
                                    <img
                                        id="base_img"
                                        src={`${process.env.PUBLIC_URL}deck/t.png`}
                                    />
                                </div>
                                <input type="range" className="speed-controller" min="0.1" step="0.1" max="5" onInput={(e) => setSpeed(e.target.value*1000)}/>
                            </div>
                        </Route>
                        <Route path="/galeria">
                            <History history={history}></History>
                        </Route>
                        <Route path="/instrucciones">
                            <Instrucciones></Instrucciones>
                        </Route>
                        <Route path="/creditos">
                            <Creditos></Creditos>
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Deck;