import './App.css';

import PropTypes from 'prop-types';

import React, { useState, useEffect, useCallback } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
    console.log('render filho');
    return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
    incrementButton: PropTypes.func,
};

function App() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = useCallback((num) => {
        setCounter((c) => c + num);
    }, []);

    console.log('render pai');
    return (
        <div className="App">
            <p>Teste 1</p>
            <h1>C1: {counter}</h1>
            <Button incrementButton={incrementCounter} />
        </div>
    );
}

export default App;
