const arrayHelpers = require("../src/arrayHelpers");
const Group = require("../src/Group");

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
}

module.exports = WorldCup;
