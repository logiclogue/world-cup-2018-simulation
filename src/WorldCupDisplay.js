import React from "react";
import teamsJson from "./teams.json";
import Sim from "./WorldCup.js";
import GroupDisplay from "./GroupDisplay";
import SeedEditor from "./SeedEditor";
import TeamEditor from "./TeamEditor";
import MatchList from "./MatchList";
import MatchDisplay from "./MatchDisplay";
import { Container, Row, Section } from "./Helpers";

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

    render() {
        return (
            <Container>
                <form onSubmit={this.handleChange}>
                    <SeedEditor
                        handleChange={this.handleSeedChange}
                        seed={this.state.seed} />
                    <TeamEditor
                        teams={teamsJson}
                        handleChange={this.handleTeamsChange} />

                    <input type="submit" value="Simulate" />
                </form>

                <Groups
                    groupNames={["A", "B", "C", "D", "E", "F", "G", "H"]}
                    worldCup={this.state.worldCup} />

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
            </Container>
        );
    }
}

const Groups = ({ groupNames, worldCup }) => (
    groupNames
        .map(name => [name, worldCup.getGroupByName(name)])
        .map(([name, group]) => (
            <Section title={"Group" + name}>
                <GroupDisplay group={group} />
            </Section>
        ))
);

export default WorldCupDisplay;
