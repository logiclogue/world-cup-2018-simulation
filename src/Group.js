const roundrobin = require("roundrobin");
const arrayHelpers = require("../src/arrayHelpers");
const Match = require("football-score-sim").Match;

class Group {
    constructor(teams) {
        this.teams = teams;
    }

    matches() {
        return roundrobin(this.teams.length, this.teams)
            .flatten()
            .map(teams => new Match(teams));
    }
}

module.exports = Group;
