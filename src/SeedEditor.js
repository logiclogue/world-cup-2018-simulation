import React from "react";

class SeedEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seed: props.seed
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleRandom = this.handleRandom.bind(this);
    }

    handleChange(event) {
        const seed = event.target.value;

        this.setState(prevState => {
            prevState.seed = seed;

            this.props.handleChange(prevState.seed);

            return prevState;
        });
    }

    handleRandom(event) {
        const random = event.target.value;

        this.setState(prevState => {
            prevState.seed = Math.random() + "";

            this.props.handleChange(prevState.seed);

            return prevState;
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.seed} />

                <input
                    type="submit"
                    onClick={this.handleRandom}
                    value="Random" />
            </div>
        );
    }
}

export default SeedEditor;
