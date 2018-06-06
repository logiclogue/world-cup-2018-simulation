const expect = require("chai").expect;
const Group = require("../src/Group");
const teamsJson = require("../src/teams.json");
const Teams = require("../src/Teams");
const Match = require("football-score-sim").Match;
const Team = require("football-score-sim").Team;

describe("Group", () => {
    const teams = new Teams(teamsJson);

    context("group A", () => {
        const teamList = teams.getByGroupName("A").value
            .map(obj => new Team(obj.name, obj.rating));
        const group = new Group(teamList);

        describe("#teams", () => {
            it("is a list of Team", () => {
                expect(group.teams[0]).to.be.instanceof(Team);
            });
        });

        describe("#matches()", () => {
            const result = group.matches();

            it("has length of 6", () => {
                expect(result).to.have.lengthOf(6);
            });

            it("returns matches", () => {
                expect(result[0]).to.be.instanceof(Match);
                expect(result[0].home.name).to.equal("Russia");
                expect(result[0].away.name).to.equal("Uruguay");
            });
        });
    });
});
