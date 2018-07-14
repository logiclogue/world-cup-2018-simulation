import React from "react";

class TeamEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: props.teams
        };

        this.handleChange = this.props.handleChange;

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleGroupChange = this.handleGroupChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e, id) {
        const newName = e.target.value;

        this.setState(state => {
            state.teams = state.teams.map((team, i) => {
                if (i === id) {
                    team.name = newName;
                }

                return team;
            });

            this.handleChange(state.teams);

            return state;
        });
    }

    handleRatingChange(e, id) {
        const newRating = e.target.value;

        this.setState(state => {
            state.teams = state.teams.map((team, i) => {
                if (i === id) {
                    team.rating = newRating;
                }

                return team;
            });

            this.handleChange(state.teams);

            return state;
        });
    }

    handleGroupChange(e, id) {
        const newGroup = e.target.value;

        this.setState(state => {
            state.teams = state.teams.map((team, i) => {
                if (i === id) {
                    team.group = newGroup;
                }

                return team;
            });

            this.handleChange(state.teams);

            return state;
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.handleChange(this.state);
    }

    render() {
        const teamRows = this.state.teams.map((team, i) =>
            <TeamRow
                key={i}
                id={i}
                team={team}
                action={this} />
        );

        return (
            <div className="mt-5">
                {teamRows}
            </div>
        );
    }
}

const TeamRow = ({ action, team, id }) => (
        <div className="form-row">
            <div className="col-md-4">
                Name:
                <Field
                    onChange={e => action.handleNameChange(e, id)}
                    value={team.name} />
            </div>
            <div className="col-md-4">
                Rating:
                <RatingField
                    onChange={e => action.handleRatingChange(e, id)}
                    value={team.rating} />
            </div>
            <div className="col-md-4 mb-3">
                Group:
                <Field
                    onChange={e => action.handleGroupChange(e, id)}
                    value={team.group} />
            </div>
        </div>
);

const RatingField = ({ onChange, value }) => (
    <input
        className="form-control"
        onChange={onChange}
        type="number"
        value={value}
        required />
);

const Field = ({ onChange, value }) => (
    <input
        className="form-control"
        onChange={onChange}
        type="text"
        value={value}
        required />
);

export default TeamEditor;
