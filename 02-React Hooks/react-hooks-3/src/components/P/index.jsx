import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line react/prop-types
export const P = () => {
    const theContext = useContext(GlobalContext);
    const {
        contextState: { body, counter },
        contextState,
        setState,
    } = theContext;
    return (
        <p className="App" onClick={() => setState({ ...contextState, counter: counter + 1 })}>
            {body} {counter}
        </p>
    );
};
