import React from "react";
import WorldCupDisplay from "./WorldCupDisplay";
import Editor from "./Editor";
import { Container } from "./Helpers";

class RootDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seed: props.seed,
            teams: props.teams
        }
    }

    handleChange(state) {
        this.setState(prevState => {
            prevState.seed = state.seed;
            prevState.teams = state.teams;

            return prevState;
        });
    }

    render() {
        return (
            <Container>
                <Editor onChange={state => this.handleChange(state)} />
            </Container>
        );
    }
}

export default RootDisplay;
