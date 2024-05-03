import { getNoteTopics } from "./route-utils";

describe("route utils", () => {
  describe("getNoteTopics", () => {
    it("should get topics from slugs", () => {
      const slugs = ["typescript/enums", "python/setup"];
      const results = getNoteTopics(slugs);

      expect(results).toEqual(expect.arrayContaining(["python", "typescript"]));
    });

    it("should dedupe topics from slugs", () => {
      const slugs = [
        "typescript/enums",
        "python/setup",
        "typescript/interfaces",
      ];
      const results = getNoteTopics(slugs);

      expect(results).toEqual(expect.arrayContaining(["python", "typescript"]));
    });
  });
});
