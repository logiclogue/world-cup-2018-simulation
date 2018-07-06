import React from "react";
import ReactDOM from "react-dom";
import Sim from "./WorldCup.js";
import teamsJson from "./teams.json";
import TeamEditor from "./TeamEditor";

class WorldCupDisplay extends React.Component {
    constructor(props) {
        super(props);

        const teams = props.teams || teamsJson;
        const seed = props.seed || "testing";

        this.worldCup = new Sim(teams, seed.toSeed());

        this.state = { teams, seed };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(state) {
        this.setState(prevState => {
            prevState.teams = state.teams;

            return prevState;
        });
    }

    render() {
        const firstGroupRow = ["A", "B", "C", "D"]
            .map(name => this.worldCup.getGroupByName(name))
            .map(group =>
                <div class="col-lg-3">
                    <Group group={group} />
                </div>
            );

        const secondGroupRow = ["E", "F", "G", "H"]
            .map(name => this.worldCup.getGroupByName(name))
            .map(group =>
                <div class="col-lg-3">
                    <Group group={group} />
                </div>
            );

        return (
            <div>
                <TeamEditor
                    teams={teamsJson}
                    handleChange={this.handleChange} />

                <div class="row">{firstGroupRow}</div>
                <div class="row">{secondGroupRow}</div>

                <Matches
                    name="Round of 16"
                    matches={this.worldCup.getRoundOf16()} /><br />
                <Matches
                    name="Quarter Finals"
                    matches={this.worldCup.getQuarterFinals()} /><br />
                <Matches
                    name="Semi Finals"
                    matches={this.worldCup.getSemiFinals()} /><br />
                <h3>Final</h3>
                <Match match={this.worldCup.getFinal()} />
            </div>
        );
    }
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
    <WorldCupDisplay seed="testing" />,
    document.getElementById("root")
);
