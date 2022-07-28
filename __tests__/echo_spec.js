import echo from '../src/echo.js';

describe("testing echo", () => {
    it("returns what you pass it", () => {
        expect(echo("funk")).toEqual("funk");
    });
})