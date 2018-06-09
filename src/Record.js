class Record {
    constructor(team, wins, draws, losses, goalsFor, goalsAgainst) {
        this.team = team;
        this.wins = wins || 0;
        this.draws = draws || 0;
        this.losses = losses || 0;
        this.goalsFor = goalsFor || 0;
        this.goalsAgainst = goalsAgainst || 0;
    }

    get points() {
        return (this.wins * 3) + this.draws;
    }

    get played() {
        return this.wins + this.draws + this.losses;
    }

    get goalDifference() {
        return this.goalsFor - this.goalsAgainst;
    }

    addExpandedMatch(expandedMatch) {
        return this;
    }
}

module.exports = Record;
