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
    
    }
}

module.exports = ExpandedMatch;
