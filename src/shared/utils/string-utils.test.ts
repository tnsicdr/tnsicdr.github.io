import { capitalize } from "./string-utils";

describe("string utils", () => {
  describe("capitalize", () => {
    it("should capitalize the first character in a string", () => {
      const result = capitalize("super simple");

      expect(result).toEqual("Super simple");
    });

    it("should pass through empty string", () => {
      const result = capitalize("");

      expect(result).toEqual("");
    });

    it("should handle a single character string", () => {
      const result = capitalize("s");

      expect(result).toEqual("S");
    });
  });
});
