import React from "react";

function OutputScreen() {

    const [output, setOutput] = React.useState(0);

    function changeOutput() {
        setOutput(0);
    }

    return (
        <div className="screen">
            <h2 className="heading">CALCULATOR</h2>
            <div className="output-area">{output}</div>
        </div>
    );
}

export default OutputScreen;