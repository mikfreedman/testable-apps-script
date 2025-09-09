import { echo } from '../src/echo';

describe("testing echo", () => {
    it("returns what you pass it", () => {
        expect(echo("funk")).toEqual("funk");
    });
});
