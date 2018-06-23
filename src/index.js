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
        <table class="table">
            <tbody style={{ width: "100%" }}>
                <td style={{ width: "40%", textAlign: "right" }}>{ match.home.name } </td>
                <td style={{ width: "20%", textAlign: "center" }}>{ match.occurrences.goals.home } - { match.occurrences.goals.away }</td>
                <td style={{ width: "40%", textAlign: "left" }}>{ match.away.name } </td>
            </tbody>
        </table>
    );
}

function Matches(props) {
    const matches = props.matches;

    return (
        <div>
            <h3>{ props.name }</h3>
            <div>{ matches.map(match => <Match match={ match } />) }</div>
        </div>
    );
}

ReactDOM.render(
    <WorldCup seed="testing" />,
    document.getElementById("root")
);
