const roundrobin = require("roundrobin");
const arrayHelpers = require("../src/arrayHelpers");
const Match = require("football-score-sim").Match;
const Matches = require("../src/Matches");

class Group {
    constructor(teams, seed) {
        this.teams = teams;
        this.seed = seed;
    }

    matches() {
        return roundrobin(this.teams.length, this.teams)
            .flatten()
            .map((teams, i) => new Match(teams, this.seed.append(i)))
            .toMatches();
    }

    table() {
        matches().reduce(addToTable, [])
    }
}

function addToTable(table, match) {

}

module.exports = Group;
