class Teams {
    constructor(teams) {
        this.teams = teams;
    }

    getByGroupName(group) {
        return this.teams.filter(team => team.group === group).toTeams();
    }
}

Array.prototype.toTeams = function () {
    return new Teams(this);
};

module.exports = Teams;
