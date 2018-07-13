import React from "react";
import SeedEditor from "./SeedEditor";
import TeamEditor from "./TeamEditor";

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: props.teams,
            seed: props.seed
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onChange(this.state);
    }

    handleTeamsChange(teams) {
        this.setState(prevState => {
            prevState.teams = teams;

            return prevState;
        });
    }

    handleSeedChange(seed) {
        this.setState(prevState => {
            prevState.seed = seed;

            return prevState;
        });
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <SeedEditor
                    seed={this.state.seed}
                    handleChange={this.handleSeedChange} />
                <TeamEditor
                    teams={this.state.teams}
                    handleChange={this.handleTeamsChange} />

                <SimulateButton />
            </form>
        );
    }
}

const SimulateButton = () => (
    <input type="submit" value="Simulate" />
);

export default Editor;
