import React from "react";
import ReactDOM from "react-dom";
import RootDisplay from "./RootDisplay";
import teamsJson from "./teams.json";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <RootDisplay seed="testing" teams={teamsJson} />,
    document.getElementById("root")
);
