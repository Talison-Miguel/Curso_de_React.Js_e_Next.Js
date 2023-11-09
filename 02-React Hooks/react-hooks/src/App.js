import './App.css';

import logo from './logo.svg';
import { useState, useEffect } from 'react';

function App() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const eventFn = () => {
        console.log('H1 clickado');
    };

    //ComponentDidUpdate - execulta toda vez que o component atualiza
    // useEffect(() => {
    //     console.log('componentDidUpdate');
    // });

    //ComponentDidMount - execulta 1x
    useEffect(() => {
        document.querySelector('h1')?.addEventListener('click', eventFn);

        //ComponenteWillAmout - limpeza
        return () => {
            document.querySelector('h1')?.removeEventListener('click', eventFn);
        };
    }, []);

    //Com dependência - execulta toda vez que a depedencia mudar
    useEffect(() => {
        console.log('C1: ', counter, ' C2:', counter2);
    }, [counter, counter2]);

    return (
        <div className="App">
            <p>Teste 1</p>
            <h1>
                C1: {counter} | C2: {counter2}
            </h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter2(counter2 + 1)}>+ 2</button>
        </div>
    );
}

export default App;
