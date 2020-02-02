import React from "react";
import OutputScreen from "./OutputScreen";
import Numpad from "./Numpad";
import Operators from "./Operators";

import {abs} from "mathjs";

function App() {

    const [output, setOutput] = React.useState(0);      // что показывать на экране
    const [number, setNumber] = React.useState(0);      // вводимое число для операций (второе число)
    const [operator, setOperator] = React.useState(""); // значение оператора
    const [result, setResult] = React.useState(0);      // результат вычислений (также первое значение)


    var operators = {
        '+' : (a,b) => (a + b),
        '-' : (a,b) => (a - b),
        '*' : (a,b) => (a * b),
        '/' : (a,b) => (a / b)
    };

    function calculate() {

    }

    function handleFunction(event) {
        const name = event.target.name;
        if (name === "AC") {
            setOutput(0); 
            setNumber(0);
            setOperator("");
            setResult(0);
        } else if (name === "+/-") {
            if (number > 0) {
                setNumber((prevNumber) => {
                    const number = -abs(prevNumber);
                    setOutput(number);
                    return number;
                });
            } else if (number < 0) {
                setNumber((prevNumber) => {
                    const number = abs(prevNumber);
                    setOutput(number);
                    return number;
                });
            }   
        } else if (name === "%") {
            if (operator != "") {
                setNumber((prevNumber) => {
                    const number = result*prevNumber/100;
                    setOutput(number);
                    return number;
                });
            } else if (operator === "") {
                setNumber((prevNumber) => {
                    const number = prevNumber/100;
                    setOutput(number);
                    return number;
                })
            }
        } else if (name === ",") {
            //TODO: later
        }
    }

    function handleNumber(event) {
        const currentNumber = event.target.name;
        setNumber((prevNumber) => {
            let newNumber = 0;
            if (prevNumber >= 0) {
                newNumber = prevNumber * 10 + Number(currentNumber);
            } else if (prevNumber < 0) {
                newNumber = prevNumber * 10 - Number(currentNumber);
            }
            setOutput(newNumber);
            return newNumber;
        });
    }

    function handleOperation(event) {
        const operation = event.target.name;
        if (operator != "") {       // если нужно поменять только оператор, то ничего другого трогать не надо
            setOperator(operation);
        } else {
            setResult(number);
            setNumber(0);
            setOperator(operation);
        }
        
    }

    function handleResult() {
        const res = operators[operator](result, number);
        setOutput(res);
        setResult(res);
        setNumber(0);
    }
    

    return (
        <div>
            <div className="container">
                <div className="screen">
                    <h2 className="heading">CALCULATOR</h2>
                    <div className="output-area">{output}</div>
                </div>
                <div className="numpad">
                    <button onClick={handleFunction} className="button btn-grey" name="AC">AC</button>
                    <button onClick={handleFunction} className="button btn-grey" name="+/-">+/−</button>
                    <button onClick={handleFunction} className="button btn-grey" name="%">%</button>
                    <button onClick={handleNumber} className="button btn-black" name="7">7</button>
                    <button onClick={handleNumber} className="button btn-black" name="8">8</button>
                    <button onClick={handleNumber} className="button btn-black" name="9">9</button>
                    <button onClick={handleNumber} className="button btn-black" name="4">4</button>
                    <button onClick={handleNumber} className="button btn-black" name="5">5</button>
                    <button onClick={handleNumber} className="button btn-black" name="6">6</button>
                    <button onClick={handleNumber} className="button btn-black" name="1">1</button>
                    <button onClick={handleNumber} className="button btn-black" name="2">2</button>
                    <button onClick={handleNumber} className="button btn-black" name="3">3</button>
                    <button onClick={handleNumber} className="button btn-black btn-zero" name="0">0</button>
                    <button onClick={handleFunction} className="button btn-black" name=",">,</button>
                </div>
                <div className="operators">
                    <button onClick={handleOperation} className="button btn-orange" name="/">÷</button>
                    <button onClick={handleOperation} className="button btn-orange" name="*">⨯</button>
                    <button onClick={handleOperation} className="button btn-orange" name="-">−</button>
                    <button onClick={handleOperation} className="button btn-orange" name="+">+</button>
                    <button onClick={handleResult} className="button btn-orange" name="=">=</button>
                </div>
            </div>
        </div>
    );
}

export default App;