import './App.css';
import { Component } from 'react';

class App extends Component {
    state = {
        counter: 0,
        posts: [
            {
                id: 1,
                title: 'O titulo 01',
                body: 'O corpo 01'
            },
            {
                id: 2,
                title: 'O titulo 02',
                body: 'O corpo 02'
            },
            {
                id: 3,
                title: 'O titulo 03',
                body: 'O corpo 03'
            }
        ]
    }

    timeOutUpdate = null

    componentDidMount() {
        this.handleTimeOut()
    }

    componentDidUpdate() {
        this.handleTimeOut()
    }

    handleTimeOut = () => {
        const { posts, counter } = this.state
        posts[0].title = 'Título atualizado'

        this.timeOutUpdate = setTimeout(() => {
            this.setState({ posts, counter: counter + 1})
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeOutUpdate)
    }

    render() {
        const { posts, counter } = this.state

        return (
            <div className="App">
                <h1>{counter}</h1>
                {posts.map((el) => (
                    <div key={el.id}>
                        <h1>{el.title}</h1>
                        <p>{el.body}</p>
                    </div>
                ))}
            </div>
        )
    };
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Primeiro projeto do curso de React.Js
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
