var mathObject = require("../mathObject");

describe("get add function", () => {
    it("adds numbers together", () => {
        expect(mathObject.add(1,2)).toStrictEqual(3);
    });
});