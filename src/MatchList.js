import MatchDisplay from "./MatchDisplay";
import React from "react";

const MatchList = ({ matches }) => (
    matches.map(match => <MatchDisplay match={match} />)
);

export default MatchList;
