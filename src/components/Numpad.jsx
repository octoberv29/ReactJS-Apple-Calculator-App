import React from "react";

function Numpad(props) {

    function handleClick(event) {
        const name = event.target.name;
        if (name === "AC" || name === "+/-" || name === "%" || name === ",") {
            props.handleFunction(name);
        } else {
            props.handleNumber(name);
        }
    }

    return (
        <div className="numpad">
            <button onClick={handleClick} className="button btn-grey" name="AC">AC</button>
            <button onClick={handleClick} className="button btn-grey" name="+/-">+/−</button>
            <button onClick={handleClick} className="button btn-grey" name="%">%</button>
            <button onClick={handleClick} className="button btn-black" name="7">7</button>
            <button onClick={handleClick} className="button btn-black" name="8">8</button>
            <button onClick={handleClick} className="button btn-black" name="9">9</button>
            <button onClick={handleClick} className="button btn-black" name="4">4</button>
            <button onClick={handleClick} className="button btn-black" name="5">5</button>
            <button onClick={handleClick} className="button btn-black" name="6">6</button>
            <button onClick={handleClick} className="button btn-black" name="1">1</button>
            <button onClick={handleClick} className="button btn-black" name="2">2</button>
            <button onClick={handleClick} className="button btn-black" name="3">3</button>
            <button onClick={handleClick} className="button btn-black btn-zero" name="0">0</button>
            <button onClick={handleClick} className="button btn-black" name=",">,</button>
        </div>
    );
}

export default Numpad;