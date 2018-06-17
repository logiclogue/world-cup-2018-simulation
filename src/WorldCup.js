const arrayHelpers = require("./arrayHelpers");
const Group = require("./Group");
const Match = require("football-score-sim").Match;
const Seed = require("football-score-sim").Seed;

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

        const order = [
            "C1 vs D2", "A1 vs B2", "B1 vs A2", "D1 vs C2",
            "E1 vs F2", "G1 vs H2", "F1 vs E2", "H1 vs G2"
        ];

        return order
            .map(s => s.split(/ vs /g))
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
