import React from "react";
import ReactDOM from "react-dom";

class WorldCup extends React.Component {
    render() {
        return (
            <p>Hello World!</p>
        );
    }
}

ReactDOM.render(
    <WorldCup />,
    document.getElementById("root")
);
