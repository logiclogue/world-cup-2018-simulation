const expect = require("chai").expect;
const Record = require("../src/Record");
const matches = require("./stubs").matches;

describe("Record", () => {
    describe("#points", () => {
        context("2 wins, 1 draw", () => {
            const record = new Record(null, 2, 1);

            it("returns 7 points", () => {
                expect(record.points).to.equal(7);
            });
        });
    });

    describe("#played", () => {
        context("2 wins, 1 draw, 3 defeats", () => {
            const record = new Record(null, 2, 1, 3);

            it("returns 6 played", () => {
                expect(record.played).to.equal(6);
            });
        });
    });

    describe("#goalDifference", () => {
        context("52 goals for, 42 against", () => {
            const record = new Record(null, 2, 1, 3, 52, 42);

            it("returns a goal difference of 10", () => {
                expect(record.goalDifference).to.equal(10);
            });
        });
    });

    describe("#addExpandedMatch", () => {
        context("defeat 0-3, with 2 wins, 1 draw, 3 defeats", () => {
            const expandedMatch = matches.toExpandedMatches()[0];
            const record = new Record(null, 2, 1, 3, 10, 10);
            const result = record.addExpandedMatch(expandedMatch);

            it("becomes 4 defeats", () => {
                expect(record.losses).to.equal(4);
            });
        });
    });
});
