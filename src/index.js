import React from "react";
import ReactDOM from "react-dom";
import Sim from "./WorldCup.js";
import teamsJson from "./teams.json";

function WorldCup(props) {
    const teams = props.teams || teamsJson;
    const seed = props.seed || "testing";
    const worldCup = new Sim(teams, seed.toSeed());

    return (
        <div>
            <Matches matches={ worldCup.getRoundOf16() } /><br />
            <Matches matches={ worldCup.getQuarterFinals() } /><br />
            <Matches matches={ worldCup.getSemiFinals() } /><br />
            <Match match={ worldCup.getFinal() } />
            <p>{ worldCup.getWinner().name }</p>
        </div>
    );
}

function Match(props) {
    const match = props.match;

    return (
        <div>
            <span>{ match.home.name } </span>
            <span>{ match.occurrences.goals.home } </span>
            <span>{ match.occurrences.goals.away } </span>
            <span>{ match.away.name } </span>
        </div>
    );
}

function Matches(props) {
    const matches = props.matches;

    return matches.map(match => <Match match={ match } />);
}

ReactDOM.render(
    <WorldCup seed="testing" />,
    document.getElementById("root")
);
