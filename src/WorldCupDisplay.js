import React from "react";
import teamsJson from "./teams.json";
import Sim from "./WorldCup.js";
import GroupDisplay from "./GroupDisplay";
import SeedEditor from "./SeedEditor";
import TeamEditor from "./TeamEditor";
import MatchList from "./MatchList";
import MatchDisplay from "./MatchDisplay";

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

    groupsToJsx(names) {
        return names
            .map(name => [name, this.worldCup.getGroupByName(name)])
            .map(([name, group]) =>
                <div class="row">
                    <h3>Group {name}</h3>
                    <GroupDisplay group={group} />
                </div>
            );
    }

    render() {
        //const firstGroupRow = this.groupsToJsx(["A", "B", "C", "D"]);
        //const secondGroupRow = this.groupsToJsx(["E", "F", "G", "H"]);
        const groups = this.groupsToJsx(["A", "B", "C", "D", "E", "F", "G", "H"]);

        return (
            <div class="container">
                <SeedEditor
                    handleChange={this.handleSeedChange}
                    seed={this.state.seed} />
                <TeamEditor
                    teams={teamsJson}
                    handleChange={this.handleChange} />

                {groups}

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

export default WorldCupDisplay;
