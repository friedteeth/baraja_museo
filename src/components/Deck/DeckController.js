import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { Animate } from "react-simple-animate";
import { getAnimationAttributes } from '../../utils/utils';
import './DeckController.css';

function DeckController({cardsQueue, play, speed}) {

    return (
        <div className={"animation-div m-3"}>
            {cardsQueue.map((card, i) => {
                const shouldPlay = play && (i == 1);
                const [x, r] = getAnimationAttributes();
                return (
                    <Animate
                        key={card}
                        play={shouldPlay}
                        end={{transform: `translateX(${x}px) translateY(-600px) rotate(${r}deg)`}}
                        delay={0.0001*speed}
                        duration={speed*0.001}
                        easeType={"cubic-bezier(0.25, 1, 0.5, 1)"}
                    >
                        <Card key={card} card={card}></Card>
                    </Animate>
                )
            })}
        </div>
    )
}

DeckController.propTypes = {
    cardsQueue: PropTypes.array,
    play: PropTypes.bool,
    speed: PropTypes.number,
}

export default DeckController;