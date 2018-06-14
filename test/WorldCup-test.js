const expect = require("chai").expect;
const teamsJson = require("../src/teams.json");
const WorldCup = require("../src/WorldCup");
const Group = require("../src/Group");
const Seed = require("football-score-sim").Seed;

describe("WorldCup", () => {
    const seed = "testing".toSeed();
    const teams = new WorldCup(teamsJson, seed);

    describe("#getGroupByName(group)", () => {
        context("group A given teams.json", () => {
            const group = teams.getGroupByName("A");

            it("returns Russia, Saudi Arabia, Egypt, Uruguay", () => {
                const names = group.teams.map(team => team.name);

                expect(names).contains("Russia");
                expect(names).contains("Saudi Arabia");
                expect(names).contains("Egypt");
                expect(names).contains("Uruguay");
            });
        });
    });

    describe("#getGroups()", () => {
        context("given teams.json", () => {
            const result = teams.getGroups();

            it("returns 8 groups", () => {
                expect(result).to.be.lengthOf(8);
            });

            context("group A", () => {
                const group = result[0];

                it("is an instance of Group", () => {
                    expect(group).to.be.instanceOf(Group);
                });

                it("has a seed", () => {
                    expect(group.seed).to.deep.equal(seed.append("A"));
                });

                it("has teams Russia, Saudi Arabia, Egypt, Uruguay", () => {
                    const names = group.teams.map(team => team.name);

                    expect(names).contains("Russia");
                });
            });
        });
    });

    describe("#knockoutRound()", () => {
        console.log(teams.knockoutRound());
    });
});
