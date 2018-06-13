class ExpandedMatch {
    constructor(playerLambda, match) {
        this.playerLambda = playerLambda;
        this.match = match;
    }

    get player() {
        return this.playerLambda(this.match);
    }

    get score() {
        return this.match.occurrences.goals;
    }

    get goalsFor() {
        return this.playerLambda(this.score);
    }

    get goalsAgainst() {
        const lambda = reverseLambda(this.playerLambda);

        return lambda(this.score);
    }

    get goalDifference() {
        return this.goalsFor - this.goalsAgainst;
    }

    get isWin() {
        return this.match.winner === this.playerLambda(this.match);
    }

    get isLoss() {
        const lambda = reverseLambda(this.playerLambda);

        return this.match.winner === lambda(this.match);
    }
}

function reverseLambda(lambda) {
    return lambda({
        home: xs => xs.away,
        away: xs => xs.home
    });
}

module.exports = ExpandedMatch;
