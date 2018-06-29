import React from "react";

class TeamEditor extends React.Component {
    constructor(props) {
        super(props);

        this.teams = props.teams;
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.teams.map(team => {
                        return (
                            <tr>
                                <td>
                                    Name:
                                    <input type="text" value={team.name} />
                                </td>
                                <td>
                                    Rating:
                                    <input type="number" value={team.rating} />
                                </td>
                                <td>
                                    Group:
                                    <input type="text" value={team.group} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default TeamEditor;
