const arrayHelpers = require("./arrayHelpers");
const Group = require("./Group");
const Match = require("football-score-sim").Match;
const Seed = require("football-score-sim").Seed;
const roundOf16 = require("./roundOf16.json");

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
        const seed = "Round of 16".toSeed();

        return roundOf16
            .map(s => s.split(" vs "))
            .map(xs => xs.map(x => {
                const groupName = x[0];
                const order = x[1];

                if (order === '1') {
                    return this.getGroupByName(groupName).winner;
                }

                return this.getGroupByName(groupName).runnerUp;
            }))
            .map(teams => new Match(teams, seed));
    }
}

module.exports = WorldCup;
