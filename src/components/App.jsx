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

    function handleFunction(fun) {
        // const fun = event.target.name;
        if (fun === "AC") {
            setOutput(0); 
            setNumber(0);
            setOperator("");
            setResult(0);
        } else if (fun === "+/-") {
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
        } else if (fun === "%") {
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
        } else if (fun === ",") {
            //TODO: later
        }
    }

    function handleNumber(currentNumber) {
        // const currentNumber = event.target.name;
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

    function handleOperation(operation) {
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
                <Numpad 
                    handleNumber = {handleNumber}
                    handleFunction = {handleFunction}    
                />
                <Operators
                    handleOperation = {handleOperation}
                    handleResult = {handleResult}
                />
            </div>
        </div>
    );
}

export default App;