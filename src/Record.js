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
        let wins = this.wins;
        let draws = this.draws;
        let losses = this.losses;

        if (expandedMatch.isWin) {
            wins += 1;
        } else if (expandedMatch.isDraw) {
            draws += 1;
        } else if (expandedMatch.isLoss) {
            losses += 1;
        }

        return new Record(
            expandedMatch.player,
            wins,
            draws,
            losses,
            this.goalsFor + expandedMatch.goalsFor,
            this.goalsAgainst + expandedMatch.goalsAgainst
        );
    }
}

module.exports = Record;
