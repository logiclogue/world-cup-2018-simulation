class Matches {
    constructor(matchArray) {
        this.value = matchArray;
    }
}

Array.prototype.toMatches = function () {
    return new Matches(this);
};

module.exports = Matches;
