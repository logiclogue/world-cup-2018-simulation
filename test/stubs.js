const Seed = require("football-score-sim").Seed;
const teams = require("../src/teams.json");
const WorldCup = require("../src/WorldCup");
const Matches = require("../src/Matches");

const seed = "testing".toSeed();
const worldCup = new WorldCup(teams, seed);
const groupA = worldCup.getGroupByName("A");
const matches = groupA.matches();
const match = matches.value[0];
const expandedMatches = matches.toExpandedMatches();
const expandedMatch = expandedMatches[0];

module.exports = {
    seed: seed,
    worldCup: worldCup,
    groupA: groupA,
    matches: matches,
    match: match,
    expandedMatches: expandedMatches,
    expandedMatch: expandedMatch
};
