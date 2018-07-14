import MatchList from "./MatchList";
import React from "react";

function GroupDisplay(props) {
    const group = props.group;

    return (
        <div className="table">
            <Table table={group.table()} />
            <MatchList matches={group.matches().value} />
        </div>
    );
}

function Table(props) {
    const table = props.table;

    const tableBody = table.map((record, i) =>
        <Record key={i} record={record} position={i + 1} />)

    return (
        <table>
            <thead>
                <th>#</th>
                <th>Team</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GD</th>
                <th>Pts</th>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>
    );
}

function Record(props) {
    const record = props.record;
    const position = props.position;

    return (
        <tr>
            <td>{position}</td>
            <td>{record.team.name}</td>
            <td>{record.played}</td>
            <td>{record.wins}</td>
            <td>{record.draws}</td>
            <td>{record.losses}</td>
            <td>{record.goalDifference}</td>
            <td>{record.points}</td>
        </tr>
    )
}

export default GroupDisplay;
