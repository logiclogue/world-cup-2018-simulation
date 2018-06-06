const expect = require("chai").expect;
const Group = require("../src/Group");
const teamsJson = require("../src/teams.json");
const Teams = require("../src/Teams");
const Match = require("football-score-sim").Match;

describe("Group", () => {
    const teams = new Teams(teamsJson);

    context("group A", () => {
        const group = new Group(teams.getByGroupName("A").teams);

        describe("#matches()", () => {
            const result = group.matches();

            it("has length of 6", () => {
                expect(result).to.have.lengthOf(6);
            });

            it("returns matches", () => {
                expect(result).to.have.all.instanceof(Match);
            });
        });
    });
});
