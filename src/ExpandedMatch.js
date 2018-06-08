class ExpandedMatch {
    constructor(playerLambda, match) {
        this.playerLambda = playerLambda;
        this.match = match;
    }

    get player() {
        return this.playerLambda(this.match);
    }
}

module.exports = ExpandedMatch;
