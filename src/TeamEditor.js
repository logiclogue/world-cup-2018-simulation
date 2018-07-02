import React from "react";

class TeamEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: props.teams
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleGroupChange = this.handleGroupChange.bind(this);
    }

    handleNameChange(e, id) {
        const newName = e.target.value;

        this.setState(state => {
            state.teams = state.teams.map((team, i) => {
                if (i === id) {
                    team.name = newName;

                    return team;
                }

                return team;
            });
        });
    }

    handleRatingChange(e, id) {
        const newRating = e.target.value;

        this.setState(state => {
            state.teams = state.teams.map((team, i) => {
                if (i === id) {
                    team.rating = newRating;

                    return team;
                }

                return team;
            });
        });
    }

    handleGroupChange(e, id) {
        
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.state.teams.map((team, i) =>
                        <TeamRow
                            key={i}
                            id={i}
                            team={team}
                            action={this} />)}
                </tbody>
            </table>
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
