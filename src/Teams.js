class Teams {
    constructor(teams) {
        this.value = teams;
    }

    getByGroupName(group) {
        return this.value.filter(team => team.group === group).toTeams();
    }
}

Array.prototype.toTeams = function () {
    return new Teams(this);
};

module.exports = Teams;
