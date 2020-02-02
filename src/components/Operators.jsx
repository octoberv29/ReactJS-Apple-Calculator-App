import React from "react";

function Operators(props) {

    function handleClick(event) {
        const name = event.target.name;
        if (name === "=") {
            props.handleResult(); 
        } else {
            props.handleOperation(name);
        }
    }

    return (
        <div className="operators">
            <button onClick={handleClick} className="button btn-orange" name="/">÷</button>
            <button onClick={handleClick} className="button btn-orange" name="*">⨯</button>
            <button onClick={handleClick} className="button btn-orange" name="-">−</button>
            <button onClick={handleClick} className="button btn-orange" name="+">+</button>
            <button onClick={handleClick} className="button btn-orange" name="=">=</button>
        </div>
    );
}

export default Operators;