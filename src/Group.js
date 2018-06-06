const roundrobin = require("roundrobin");
const arrayHelpers = require("../src/arrayHelpers");

class Group {
    constructor(teams) {
        this.teams = teams;
    }

    matches() {
        return roundrobin(this.teams.length, this.teams)
            .flatten();
    }
}

module.exports = Group;
