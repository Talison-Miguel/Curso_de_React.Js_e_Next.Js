import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import './App.css';

const globalState = {
    title: 'O titulo do contexto',
    body: 'Body do Contexto',
    counter: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'muda': {
            console.log('Chamou Muda com', action.payload);
            return { ...state, title: action.payload };
        }

        case 'inverter': {
            console.log('Chamou inverter');
            const { title } = state;
            return { ...state, title: title.split('').reverse().join('') };
        }
    }

    console.log('Nenhuma action encontrada');
    return { ...state };
};

function App() {
    const [state, dispatch] = useReducer(reducer, globalState);

    const { counter, title, body } = state;

    return (
        <div>
            <h1>
                {title} {counter}
            </h1>
            <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-br') })}>Click</button>
            <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
            <button onClick={() => dispatch({ type: 'Sem Action' })}>Sem Action</button>
        </div>
    );
}

export default App;
