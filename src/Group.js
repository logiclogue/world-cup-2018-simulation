const roundrobin = require("roundrobin");
const arrayHelpers = require("./arrayHelpers");
const Match = require("football-score-sim").Match;
const Matches = require("./Matches");
const Record = require("./Record");

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
        const expandedMatches = this.matches().toExpandedMatches();
        const records = this.teams.map(team => new Record(team));

        return expandedMatches.reduce(addToTable, records).sort((a, b) => {
            const points = b.points - a.points;

            if (points !== 0) {
                return points;
            }

            const goalDifference = b.goalDifference - a.goalDifference;

            if (goalDifference !== 0) {
                return goalDifference;
            }

            const wins = b.wins - a.wins;

            if (wins !== 0) {
                return wins;
            }

            const goalsFor = b.goalsFor - a.goalsFor;

            return goalsFor;
        });
    }

    get winner() {
        return this.table()[0].team;
    }

    get runnerUp() {
        return this.table()[1].team;
    }
}

function addToTable(records, expandedMatch) {
    return records.map(record => {
        if (record.team === expandedMatch.player) {
            return record.addExpandedMatch(expandedMatch);
        }

        return record;
    });
}

module.exports = Group;
