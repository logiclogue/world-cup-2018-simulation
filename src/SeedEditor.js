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

        this.props.handleChange(seed);

        this.setState(prevState => {
            prevState.seed = seed;

            return prevState;
        });
    }

    handleRandom(event) {
        event.preventDefault();

        const seed = Math.random() + "";

        this.props.handleChange(seed);

        this.setState(prevState => {
            prevState.seed = seed;

            return prevState;
        });
    }

    render() {
        return (
            <div className="form-group mt-5">
                <div className="form-row">
                    <SeedField
                        onChange={this.handleChange}
                        value={this.state.seed} />

                    <RandomiseButton onClick={this.handleRandom} />
                </div>
            </div>
        );
    }
}

const SeedField = ({ onChange, value }) => (
    <div className="col-md-10 mb-2">
        <input
            className="form-control"
            type="text"
            onChange={onChange}
            value={value} />
    </div>
);

const RandomiseButton = ({ onClick }) => (
    <div className="col-md-2">
        <input
            className="btn btn-primary btn-block"
            type="submit"
            onClick={onClick}
            value="Random" />
    </div>
);

export default SeedEditor;
