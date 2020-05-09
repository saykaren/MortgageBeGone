import React, {useState} from 'react';
import '../Styling/App.scss';
import Footer from './Footer';
import DataCalculate from "./DataCalculate";

function App() {

    return (
        <>
            <DataCalculate />
            <Footer />
        </>
    );
}

// interface CounterProps {
//     counter: number;
// }
//
// export const Counter = ({counter}:CounterProps) =>{
// return(
//     <div>
//         <p>{counter}</p>
//     </div>
// )
// };

export default App;
