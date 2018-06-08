const expect = require("chai").expect;
const stubs = require("./stubs");

describe("ExpandedMatch", () => {
    describe("#player", () => {
        context("given first match of group A", () => {
            it("it returns Russia", () => {
                expect(stubs.expandedMatch.player.name).to.equal("Russia");
            });
        });
    });
});
