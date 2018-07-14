import React from "react";

function MatchDisplay({ match }) {
    const homeName = match.home.name;
    const awayName = match.away.name;
    const homeGoals = match.occurrences.goals.home;
    const awayGoals = match.occurrences.goals.away;
    let goals = homeGoals + " - " + awayGoals;

    if (match.isExtraTime) {
        goals += " aet";
    }

    if (match.isPenaltyShootout) {
        goals += " ("
            + match.penaltyShootout.goals.home
            + " - "
            + match.penaltyShootout.goals.away
            + ")";
    }

    return (
        <table className="table">
            <tbody style={{ width: "100%" }}>
                <td style={{ width: "40%", textAlign: "right" }}>{homeName} </td>
                <td style={{ width: "20%", textAlign: "center" }}>{goals}</td>
                <td style={{ width: "40%", textAlign: "left" }}>{awayName} </td>
            </tbody>
        </table>
    );
}

export default MatchDisplay;
