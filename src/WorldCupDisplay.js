import React from "react";
import Sim from "./WorldCup.js";
import GroupDisplay from "./GroupDisplay";
import MatchList from "./MatchList";
import MatchDisplay from "./MatchDisplay";
import Editor from "./Editor";
import { Container, Row, Section } from "./Helpers";

class WorldCupDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.teams = props.teams;
        this.seed = props.seed;

        this.state = {
            hasSimulated: false,
            worldCup: new Sim(this.teams, this.seed.toSeed())
        };

        this.worldCup = this.state.worldCup;
    }

    handleChange({ teams, seed }) {
        this.setState(prevState => {
            prevState.hasSimulated = true;
            prevState.worldCup = new Sim(teams, seed.toSeed());

            return prevState;
        })
    }

    render() {
        return (
            <Container>
                <Editor onChange={state => this.handleChange(state)} />

                <Groups
                    groupNames={["A", "B", "C", "D", "E", "F", "G", "H"]}
                    worldCup={this.state.worldCup} />

                <Section title="Round of 16">
                    <MatchList matches={this.state.worldCup.getRoundOf16()} />
                </Section>

                <Section title="Quarter Finals">
                    <MatchList
                        matches={this.state.worldCup.getQuarterFinals()} />
                </Section>

                <Section title="Semi Finals">
                    <MatchList
                        matches={this.state.worldCup.getSemiFinals()} />
                </Section>

                <Section title="Final">
                    <MatchDisplay match={this.state.worldCup.getFinal()} />
                </Section>
            </Container>
        );
    }
}

const Groups = ({ groupNames, worldCup }) => (
    groupNames
        .map(name => [name, worldCup.getGroupByName(name)])
        .map(([name, group]) => (
            <Section title={"Group " + name}>
                <GroupDisplay group={group} />
            </Section>
        ))
);

export default WorldCupDisplay;
