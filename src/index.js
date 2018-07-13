import React from "react";
import ReactDOM from "react-dom";
import RootDisplay from "./RootDisplay";
import teamsJson from "./teams.json";

ReactDOM.render(
    <RootDisplay seed="testing" teams={teamsJson} />,
    document.getElementById("root")
);
