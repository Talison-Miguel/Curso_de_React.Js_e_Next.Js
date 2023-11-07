import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { Component } from 'react';

function App() {
    const [reverse, setReverse] = useState(false);
    const [counter, setCounter] = useState(0);
    const reverseClass = reverse ? 'reverse' : '';

    const handleClick = () => {
        setReverse((reverse) => !reverse);
    };

    const handleIncrement = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

                <h1>Contador: {counter}</h1>

                <p>
                    <button type="number" onClick={handleClick}>
                        Reverse {reverseClass}
                    </button>
                </p>

                <p>
                    <button type="number" onClick={handleIncrement}>
                        Increment {counter}
                    </button>
                </p>
            </header>
        </div>
    );
}

export default App;
