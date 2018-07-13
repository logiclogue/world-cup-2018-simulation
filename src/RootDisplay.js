import React from "react";
import WorldCupDisplay from "./WorldCupDisplay";
import Editor from "./Editor";
import { Container } from "./Helpers";

class RootDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seed: props.seed,
            teams: props.teams,
            isEditing: true
        }
    }

    handleEditSubmit(state) {
        this.setState(prevState => {
            prevState.seed = state.seed;
            prevState.teams = state.teams;
            prevState.isEditing = false;

            return prevState;
        });
    }

    render() {
        return (
            <Container>
                <Switchable
                    seed={this.state.seed}
                    teams={this.state.teams}
                    onEditSubmit={state => this.handleEditSubmit(state)}
                    isEditing={this.state.isEditing} />
            </Container>
        );
    }
}

function Switchable({ seed, teams, onEditSubmit, isEditing }) {
    if (isEditing) {
        return (
            <Editor seed={seed} teams={teams} onChange={onEditSubmit} />
        );
    }

    return (
        <WorldCupDisplay seed={seed} teams={teams} />
    );
};

export default RootDisplay;
