import React, {useState} from 'react';
import logo from '../Assests/logo.svg';
import '../Styling/App.scss';

function App() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Editing <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Counter counter={counter}/>
            </header>
        </div>
    );
}

interface CounterProps {
    counter: number;
}

export const Counter = ({counter}:CounterProps) =>{
return(
    <div>
        <p>{counter}</p>
    </div>
)
};

export default App;
