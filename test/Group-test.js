const expect = require("chai").expect;
const Group = require("../src/Group");
const teamsJson = require("../src/teams.json");
const Teams = require("../src/Teams");
const Match = require("football-score-sim").Match;
const Team = require("football-score-sim").Team;
const Seed = require("football-score-sim").Seed;

describe("Group", () => {
    const teams = new Teams(teamsJson);

    context("group A", () => {
        const teamList = teams.getByGroupName("A").value
            .map(obj => new Team(obj.name, obj.rating));
        const seed = "testing".toSeed();
        const group = new Group(teamList, seed);

        describe("#teams", () => {
            it("is a list of Team", () => {
                expect(group.teams[0]).to.be.instanceof(Team);
            });
        });

        describe("#matches()", () => {
            const result = group.matches();

            it("has length of 6", () => {
                expect(result).to.have.lengthOf(6);
            });

            context("first match", () => {
                const match = result[0];

                it("is a match", () => {
                    expect(match).to.be.instanceof(Match);
                });

                it("has a seed", () => {
                    expect(match.seed).to.deep.equal(seed.append(0));
                });

                it("is between russia and uruguay", () => {
                    expect(match.home.name).to.equal("Russia");
                    expect(match.away.name).to.equal("Uruguay");
                });

                it("is 2-1", () => {
                    expect(match.occurrences.goals.value).to.deep.equal([1, 2]);
                });
            });
        });
    });
});
