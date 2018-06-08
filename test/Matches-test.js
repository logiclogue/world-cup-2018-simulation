const expect = require("chai").expect;
const stubs = require("./stubs");
const teams = require("../src/teams.json");
const WorldCup = require("../src/WorldCup");

describe("Matches", () => {
    const worldCup = new WorldCup(teams, stubs.seed);
    const matches = worldCup.getGroupByName("A").matches();

    describe("#toExpandedMatches()", () => {
        
    });
});
