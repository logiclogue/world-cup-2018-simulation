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
    });
});
