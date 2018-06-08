const expect = require("chai").expect;
const teamsJson = require("../src/teams.json");
const WorldCup = require("../src/WorldCup");
const Matches = require("../src/Matches");
const Match = require("football-score-sim").Match;
const Team = require("football-score-sim").Team;
const Seed = require("football-score-sim").Seed;

describe("Group", () => {
    context("group A", () => {
        const seed = "testing".toSeed();
        const group = new WorldCup(teamsJson, seed).getGroupByName("A");

        describe("#matches()", () => {
            const result = group.matches();

            it("has length of 6", () => {
                expect(result.value).to.have.lengthOf(6);
            });

            it("returns type Matches", () => {
                expect(result).to.be.instanceOf(Matches);
            });

            context("first match", () => {
                const match = result.value[0];

                it("is a match", () => {
                    expect(match).to.be.instanceof(Match);
                });

                it("has a seed", () => {
                    expect(match.seed).to.deep.equal(group.seed.append(0));
                });

                it("is between russia and uruguay", () => {
                    expect(match.home.name).to.equal("Russia");
                    expect(match.away.name).to.equal("Uruguay");
                });

                it("is 0-3", () => {
                    expect(match.occurrences.goals.value).to.deep.equal([0, 3]);
                });
            });
        });
    });
});
