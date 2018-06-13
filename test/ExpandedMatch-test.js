const expect = require("chai").expect;
const stubs = require("./stubs");

describe("ExpandedMatch", () => {
    context("given Russia first match of group A", () => {
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

        describe("#goalDifference", () => {
            it("returns -3", () => {
                const goalsFor = expandedMatch.goalsFor;
                const goalsAgainst = expandedMatch.goalsAgainst;
                const diff = goalsFor - goalsAgainst;

                expect(expandedMatch.goalDifference).to.equal(diff);
            });
        });
    });

    context("the team loses", () => {
        const expandedMatch = stubs.expandedMatch;

        describe("#isWin", () => {
            it("returns false", () => {
                expect(expandedMatch.isWin).to.be.false;
            });
        });

        describe("#isLoss", () => {
            it("returns true", () => {
                expect(expandedMatch.isLoss).to.be.true;
            });
        });

        describe("#isDraw", () => {
            it("returns false", () => {
                expect(expandedMatch.isDraw).to.be.false;
            });
        });
    });

    context("the team wins", () => {
        const expandedMatch = stubs.expandedMatches[1];

        describe("#isWin", () => {
            it("returns true", () => {
                expect(expandedMatch.isWin).to.be.true;
            });
        })

        describe("#isLoss", () => {
            it("returns false", () => {
                expect(expandedMatch.isLoss).to.be.false;
            });
        });

        describe("#isDraw", () => {
            it("returns false", () => {
                expect(expandedMatch.isDraw).to.be.false;
            });
        });
    });

    context("the team draws", () => {
        const expandedMatch = stubs.expandedMatches[3];

        describe("#isWin", () => {
            it("returns false", () => {
                expect(expandedMatch.isWin).to.be.false;
            });
        })

        describe("#isLoss", () => {
            it("returns false", () => {
                expect(expandedMatch.isLoss).to.be.false;
            });
        });

        describe("#isDraw", () => {
            it("returns true", () => {
                expect(expandedMatch.isDraw).to.be.true;
            });
        });
    });
});
