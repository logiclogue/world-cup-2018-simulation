import React from "react";
import ReactDOM from "react-dom";
import Sim from "./WorldCup.js";
import teamsJson from "./teams.json";
import TeamEditor from "./TeamEditor";
import SeedEditor from "./SeedEditor";
import MatchDisplay from "./MatchDisplay";
import MatchList from "./MatchList";
import GroupDisplay from "./GroupDisplay";

class WorldCupDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.teams = props.teams || teamsJson;
        this.seed = props.seed || "testing";

        this.worldCup = new Sim(this.teams, this.seed.toSeed());

        this.state = {
            teams: this.teams,
            seed: this.seed
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSeedChange = this.handleSeedChange.bind(this);
    }

    handleChange(state) {
        this.setState(prevState => {
            prevState.teams = state.teams;
            prevState.seed = this.seed;

            return prevState;
        });
    }

    handleSeedChange(seed) {
        this.seed = seed;
    }

    render() {
        const firstGroupRow = ["A", "B", "C", "D"]
            .map(name => this.worldCup.getGroupByName(name))
            .map(group =>
                <div class="col-lg-3">
                    <GroupDisplay group={group} />
                </div>
            );

        const secondGroupRow = ["E", "F", "G", "H"]
            .map(name => this.worldCup.getGroupByName(name))
            .map(group =>
                <div class="col-lg-3">
                    <GroupDisplay group={group} />
                </div>
            );

        return (
            <div>
                <SeedEditor
                    handleChange={this.handleSeedChange}
                    seed={this.state.seed} />
                <TeamEditor
                    teams={teamsJson}
                    handleChange={this.handleChange} />

                <div class="row">{firstGroupRow}</div>
                <div class="row">{secondGroupRow}</div>

                <MatchList
                    name="Round of 16"
                    matches={this.worldCup.getRoundOf16()} /><br />
                <MatchList
                    name="Quarter Finals"
                    matches={this.worldCup.getQuarterFinals()} /><br />
                <MatchList
                    name="Semi Finals"
                    matches={this.worldCup.getSemiFinals()} /><br />
                <h3>Final</h3>
                <MatchDisplay match={this.worldCup.getFinal()} />
            </div>
        );
    }
}

ReactDOM.render(
    <WorldCupDisplay seed="testing" />,
    document.getElementById("root")
);
