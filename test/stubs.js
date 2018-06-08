const Seed = require("football-score-sim").Seed;
const teams = require("../src/teams.json");
const WorldCup = require("../src/WorldCup");

const seed = "testing".toSeed();
const worldCup = new WorldCup(teams, seed);

module.exports = {
    seed: seed,
    worldCup: worldCup
};
