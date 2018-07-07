import MatchDisplay from "./MatchDisplay";
import React from "react";

function MatchList({ name, matches }) {
    return (
        <div>
            <h3>{name}</h3>
            <div>{matches.map(match => <MatchDisplay match={match} />)}</div>
        </div>
    );
}

export default MatchList;
