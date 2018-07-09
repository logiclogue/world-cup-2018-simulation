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

        this.state = {
            teams: this.teams,
            seed: this.seed
        };

        this.worldCup = new Sim(this.teams, this.seed.toSeed());

        this.state.worldCup = this.worldCup;

        this.handleChange = this.handleChange.bind(this);
        this.handleTeamsChange = this.handleTeamsChange.bind(this);
        this.handleSeedChange = this.handleSeedChange.bind(this);
    }

    handleTeamsChange(teams) {
        this.teams = teams;
    }

    handleSeedChange(seed) {
        this.seed = seed;
    }

    handleChange(event) {
        event.preventDefault();

        const teams = this.teams;
        const seed = this.seed;

        this.setState(prevState => {
            prevState.teams = teams;
            prevState.seed = seed;

            prevState.worldCup = new Sim(teams, seed.toSeed());

            return prevState;
        });
    }

    groupsToJsx(names) {
        return names
            .map(name => [name, this.state.worldCup.getGroupByName(name)])
            .map(([name, group]) =>
                <div className="row">
                    <h3>Group {name}</h3>
                    <GroupDisplay group={group} />
                </div>
            );
    }

    render() {
        const groups = this.groupsToJsx(["A", "B", "C", "D", "E", "F", "G", "H"]);

        return (
            <div className="container">
                <form onSubmit={this.handleChange}>
                    <SeedEditor
                        handleChange={this.handleSeedChange}
                        seed={this.state.seed} />
                    <TeamEditor
                        teams={teamsJson}
                        handleChange={this.handleTeamsChange} />

                    <input type="submit" value="Simulate" />
                </form>

                {groups}

                <MatchList
                    name="Round of 16"
                    matches={this.state.worldCup.getRoundOf16()} /><br />
                <MatchList
                    name="Quarter Finals"
                    matches={this.state.worldCup.getQuarterFinals()} /><br />
                <MatchList
                    name="Semi Finals"
                    matches={this.state.worldCup.getSemiFinals()} /><br />
                <h3>Final</h3>
                <MatchDisplay match={this.state.worldCup.getFinal()} />
            </div>
        );
    }
}

export default WorldCupDisplay;
