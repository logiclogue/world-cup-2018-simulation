import React from "react";
import ReactDOM from "react-dom";
import RootDisplay from "./RootDisplay";
import teamsJson from "./teams.json";
import md5 from "md5";
import "bootstrap/dist/css/bootstrap.min.css";

console.log(addFive(43));

const seed = md5(Date.now() + "");

ReactDOM.render(
    <RootDisplay seed={seed} teams={teamsJson} />,
    document.getElementById("root")
);
