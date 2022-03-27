const expect = chai.expect;
 
describe('MyFunctions', function() {
    describe("#Playername", function() {
        it("should check to see if a string was passed in", function() {
            let test = new Player("Steven");
            expect(test.playerName).to.be.a("string");
        });

        it("Testing will pass if name isnt a string", function() {
            let testTwo = new Player("Mai");
            expect(testTwo.playerName).is.not.a("string");
        })
    });
});