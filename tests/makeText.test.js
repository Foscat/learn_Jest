const makeText = require("../makeText");

describe("Make a line of text", () => {
    it("Returns a string", () => {
        expect(makeText.line("This is ", "my string")).toBe("This is my string and it is soo cool");
    })
})