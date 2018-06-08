const expect = require("chai").expect;
const stubs = require("./stubs");
const ExpandedMatch = require("../src/ExpandedMatch");
const arrayHelpers = require("../src/arrayHelpers");

describe("Matches", () => {
    describe("#toExpandedMatches()", () => {
        context("group A matches", () => {
            const matches = stubs.worldCup.getGroupByName("A").matches();
            const result = matches.toExpandedMatches();

            it("has double the length of matches", () => {
                expect(result).to.have.lengthOf(matches.value.length * 2);
            });

            it("is an array of ExpandedMatch", () => {
                result.forEach(expandedMatch => {
                    expect(expandedMatch).to.be.instanceOf(ExpandedMatch);
                });
            });

            it("has no repeated columns", () => {
                const expectedLength = result.unique().length;

                expect(result).to.have.lengthOf(expectedLength);
            });
        });
    });
});
