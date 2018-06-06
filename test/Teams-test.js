const teamsJson = require("../src/teams.json");
const Teams = require("../src/Teams");
const expect = require("chai").expect;

describe("Teams", () => {
    const teams = new Teams(teamsJson);

    describe("#getByGroupName(group)", () => {
        context("group A given teams.json", () => {
            it("returns Russia, Saudi Arabia, Egypt, Uruguay", () => {
                const result = teams.getByGroupName("A");
                const names = result.teams.map(team => team.name);

                expect(names).contains("Russia");
                expect(names).contains("Saudi Arabia");
                expect(names).contains("Egypt");
                expect(names).contains("Uruguay");
            });
        });
    });
});
