import React from "react";

class SeedEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seed: props.seed
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const seed = event.target.value;

        this.setState(prevState => {
            prevState.seed = seed;

            console.log(seed);

            this.props.handleChange(prevState.seed);

            return prevState;
        });
    }

    render() {
        return (
            <input
                type="text"
                onChange={this.handleChange}
                value={this.state.seed} />
        );
    }
}

export default SeedEditor;
