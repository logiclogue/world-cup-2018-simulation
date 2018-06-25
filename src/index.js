import React from "react";
import ReactDOM from "react-dom";
import Sim from "./WorldCup.js";
import teamsJson from "./teams.json";

function WorldCup(props) {
    const teams = props.teams || teamsJson;
    const seed = props.seed || "testing";
    const worldCup = new Sim(teams, seed.toSeed());

    return (
        <div class="container">
            <div class="col-sm-4">
                <Group group={ worldCup.getGroupByName("A") } />
            </div>
            <div class="col-sm-4">
                <Group group={ worldCup.getGroupByName("B") } />
            </div>
            <div class="col-sm-4">
                <Group group={ worldCup.getGroupByName("C") } />
            </div>
            <Matches name="Round of 16" matches={ worldCup.getRoundOf16() } /><br />
            <Matches name="Quarter Finals" matches={ worldCup.getQuarterFinals() } /><br />
            <Matches name="Semi Finals" matches={ worldCup.getSemiFinals() } /><br />
            <h3>Final</h3>
            <Match match={ worldCup.getFinal() } />
            <p>{ worldCup.getWinner().name }</p>
        </div>
    );
}

function Group(props) {
    const group = props.group;

    return (
        <div class="table">
            <Table table={ group.table() } />
            <Matches matches={ group.matches().value } />
        </div>
    );
}

function Table(props) {
    const table = props.table;

    return (
        <table>
            <thead>
                <th>#</th>
                <th>Team</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GD</th>
                <th>Pts</th>
            </thead>
            <tbody>
                { table.map((record, i) =>
                    <Record record={ record } position={ i + 1 } />) }
            </tbody>
        </table>
    );
}

function Record(props) {
    const record = props.record;
    const position = props.position;

    return (
        <tr>
            <td>{ position }</td>
            <td>{ record.team.name }</td>
            <td>{ record.played }</td>
            <td>{ record.wins }</td>
            <td>{ record.draws }</td>
            <td>{ record.losses }</td>
            <td>{ record.goalDifference }</td>
            <td>{ record.points }</td>
        </tr>
    )
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
