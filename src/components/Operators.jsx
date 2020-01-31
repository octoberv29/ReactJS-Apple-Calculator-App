import React from "react";

function Operators(props) {

    function handleClick(event) {
        const operator = event.target.name;
        if (operator === "÷") operator = "/";
        if (operator === "⨯") operator = "*";
        console.log(operator);
    }

    function handleEqualSignClick() {
        
    }

    return (
        <div className="operators">
            <button onClick={handleClick} className="button btn-orange" name="÷">÷</button>
            <button onClick={handleClick} className="button btn-orange" name="⨯">⨯</button>
            <button onClick={handleClick} className="button btn-orange" name="−">−</button>
            <button onClick={handleClick} className="button btn-orange" name="+">+</button>
            <button onClick={handleEqualSignClick} className="button btn-orange" name="=">=</button>
        </div>
    );
}

export default Operators;