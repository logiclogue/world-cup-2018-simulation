const roundrobin = require("roundrobin");
const arrayHelpers = require("../src/arrayHelpers");
const Match = require("football-score-sim").Match;

class Group {
    constructor(teams, seed) {
        this.teams = teams;
        this.seed = seed;
    }

    matches() {
        return roundrobin(this.teams.length, this.teams)
            .flatten()
            .map((teams, i) => new Match(teams, this.seed.append(i)));
    }
}

module.exports = Group;
