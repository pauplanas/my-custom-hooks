import {useState} from 'react';

export const useCounter = (initState = 0) => {

    // console.log('initState', initState);

    const [state, setState] = useState(initState);

    const increment = (factor = 1) => {
        setState(state + factor);
    }

    const decrement = (factor = 1) => {
        setState(state - factor);
    }

    const reset = () => {
        setState(initState);
    }

    return {
        state,
        increment,
        decrement,
        reset
    };

}