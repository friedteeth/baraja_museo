import {useEffect, useRef} from 'react';


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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

function getAnimationAttributes() {
    const x = (Math.random() * window.innerWidth) - (window.innerWidth/2);
    const r = (Math.random() * 1080) - 540;

    return [x, r];
}

export {shuffleArray, useInterval, getAnimationAttributes};