import React, { useContext } from 'react';

import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line react/prop-types
export const H1 = () => {
    const theContext = useContext(GlobalContext);
    const {
        contextState: { title, counter },
    } = theContext;
    return (
        <h1 className="App">
            {title} {counter}
        </h1>
    );
};
