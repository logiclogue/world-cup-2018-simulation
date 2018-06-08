const ExpandedMatch = require("./ExpandedMatch");

class Matches {
    constructor(matchArray) {
        this.value = matchArray;
    }

    toExpandedMatches() {
        const homeTeams = this.value
            .map(match => new ExpandedMatch(match.home, match));
        const awayTeams = this.value
            .map(match => new ExpandedMatch(match.away, match));

        return homeTeams.concat(awayTeams);
    }
}

Array.prototype.toMatches = function () {
    return new Matches(this);
};

module.exports = Matches;
