const arrayHelpers = require("./arrayHelpers");
const Group = require("./Group");
const Match = require("football-score-sim").Match;

class WorldCup {
    constructor(teams, seed) {
        this.value = teams;
        this.seed = seed;
    }

    getGroupByName(name) {
        const teams = this.value
            .filter(team => team.group === name);
        const seed = this.seed.append(name);

        return new Group(teams, seed);
    }

    getGroups() {
        return this.value
            .map(team => team.group)
            .unique()
            .map(this.getGroupByName.bind(this));
    }

    getRoundOf16() {
        return [
            new Match([this.getGroupByName("C").winner, this.getGroupByName("D").winner], "testing".toSeed())
        ];
    }
}

module.exports = WorldCup;
