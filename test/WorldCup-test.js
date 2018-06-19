const expect = require("chai").expect;
const teamsJson = require("../src/teams.json");
const WorldCup = require("../src/WorldCup");
const Group = require("../src/Group");
const Seed = require("football-score-sim").Seed;

describe("WorldCup", () => {
    const seed = "testing".toSeed();
    const worldCup = new WorldCup(teamsJson, seed);

    describe("#getGroupByName(group)", () => {
        context("group A given teams.json", () => {
            const group = worldCup.getGroupByName("A");

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
            const result = worldCup.getGroups();

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

    describe("#getRoundOf16()", () => {
        const result = worldCup.getRoundOf16();

        context("first match", () => {
            const match = result[0];

            it("'home' team is winner of group C", () => {
                const groupC = worldCup.getGroupByName("C");

                expect(match.home).to.equal(groupC.winner);
            });

            it("'away' team is runner up of group D", () => {
                const groupD = worldCup.getGroupByName("D");

                expect(match.away).to.equal(groupD.runnerUp);
            });

            it("has a seed of 'Round of 16'", () => {
                expect(match.seed.value).to.equal("Round of 16");
            });
        });
    });

    describe("#getQuarterFinals()", () => {
        const result = worldCup.getQuarterFinals();
        const roundOf16 = worldCup.getRoundOf16();

        context("first match", () => {
            const match = result[0];

            it("'home' team is the winner of the first match", () => {
                expect(match.home).to.equal(roundOf16[0].winner);
            });

            it("'away' team is the winner of the second match", () => {
                expect(match.away).to.equal(roundOf16[1].winner);
            });

            it("has a seed of 'Quarter Finals'", () => {
                expect(match.seed.value).to.equal("Quarter Finals");
            });
        });
    });

    describe("#getSemiFinals()", () => {
        const result = worldCup.getSemiFinals();
        const quarterFinals = worldCup.getQuarterFinals();

        context("first match", () => {
            const match = result[0];

            it("'home' team is the winner of the first match", () => {
                expect(match.home).to.equal(quarterFinals[0].winner);
            });

            it("'away' team is the winner of the second match", () => {
                expect(match.away).to.equal(quarterFinals[1].winner);
            });

            it("has a seed of 'Semi Finals'", () => {
                expect(match.seed.value).to.equal("Semi Finals");
            });
        });
    });

    describe("#getFinal()", () => {
        const final = worldCup.getFinal();
        const semiFinals = worldCup.getSemiFinals();

        it("'home' team is the winner of the first match", () => {
            expect(final.home).to.equal(semiFinals[0].winner);
        });

        it("'away' team is the winner of the second match", () => {
            expect(final.away).to.equal(semiFinals[1].winner);
        });

        it("has a seed of 'Final'", () => {
            expect(final.seed.value).to.equal("Final");
        });
    });
    
    describe("#getWinner()", () => {
        const final = worldCup.getFinal();
        const winner = worldCup.getWinner();

        it("returns the winner of the final", () => {
            expect(winner).to.equal(final.winner);
        });
    });
});
