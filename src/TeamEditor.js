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
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        {teamRows}
                    </tbody>
                </table>

                <input type="submit" value="Simulate" />
            </form>
        );
    }
}

const TeamRow = ({ action, team, id }) =>
        <tr>
            <td>
                Name:
                <input
                    onChange={e => action.handleNameChange(e, id)}
                    type="text"
                    value={team.name} />
            </td>
            <td>
                Rating:
                <input
                    onChange={e => action.handleRatingChange(e, id)}
                    type="number"
                    value={team.rating} />
            </td>
            <td>
                Group:
                <input
                    onChange={e => action.handleGroupChange(e, id)}
                    type="text"
                    value={team.group} />
            </td>
        </tr>

export default TeamEditor;
