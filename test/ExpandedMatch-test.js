const expect = require("chai").expect;
const stubs = require("./stubs");

describe("ExpandedMatch", () => {
    context("given first match of group A", () => {
        const expandedMatch = stubs.expandedMatch;

        describe("#player", () => {
            it("returns Russia", () => {
                expect(expandedMatch.player.name).to.equal("Russia");
            });
        });

        describe("#score", () => {
            it("returns 0-3", () => {
                expect(expandedMatch.score.value).to.deep.equal([0, 3]);
            })
        });

        describe("#goalsFor", () => {
            it("returns 0", () => {
                const goals = expandedMatch.score.home;

                expect(expandedMatch.goalsFor).to.equal(goals);
            });
        });

        describe("#goalsAgainst", () => {
            it("returns 3", () => {
                const goals = expandedMatch.score.away;

                expect(expandedMatch.goalsAgainst).to.equal(goals);
            });
        });
    });
});
