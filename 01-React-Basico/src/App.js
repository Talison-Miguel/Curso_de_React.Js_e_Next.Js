import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// class App extends Component {
//   render() {
//     return <h1>Class</h1>
//   }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primeiro projeto do curso de React.Js
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
