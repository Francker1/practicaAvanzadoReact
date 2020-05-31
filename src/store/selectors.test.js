import * as selectors from "./selectors";

describe("selectors", () => {
  describe("getTotalFavsAds", () => {
    test("should count elements in object favorite ads", () => {
      const initialState = {
        favs: {
          "5e43096e99660405061db854": true,
          "5e4974c23976de16b4d34260": true,
        },
      };

      expect(selectors.getTotalFavsAds(initialState)).toBe(2);
    });
  });
});
