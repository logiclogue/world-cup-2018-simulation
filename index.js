const sim = require("football-score-sim");
const teamData = require("./src/teams");

const teams = teamData.map(team => new sim.Team(team.name, team.rating));

const russia = teams[0];
const saudi = teams[1];
const seed = "testing".toSeed();

const match = new sim.Match([russia, saudi], seed);

console.log(match.occurrences.goals.value);
