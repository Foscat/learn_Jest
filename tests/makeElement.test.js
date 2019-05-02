const makeElement = require("../makeElement");

describe("Create a DOM element", () => {
    test("See if the function made a DOM node", () => {
        expect(makeElement.div("my data")).toEqual("my data")
    })
})