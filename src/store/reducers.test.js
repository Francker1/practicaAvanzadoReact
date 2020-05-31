import * as reducers from "./reducers";
import * as TYPES from "./types";

describe("reducers", () => {
  describe("ads", () => {
    test("should get a FETCH_ADS_SUCCESS action", () => {
      const initialState = [];
      const ads = [{ _id: "5e4974c23976de16b4d34260" }];
      const action = {
        type: TYPES.FETCH_ADS_SUCCESS,
        ads,
      };

      const expectedState = ads;
      expect(reducers.ads(initialState, action)).toEqual(expectedState);
    });
  });

  describe("favs", () => {
    test("should get a ADD_TO_FAVS_SUCCESS action", () => {
      const initialState = [];
      const favs = [];
      const action = {
        type: TYPES.ADD_TO_FAVS_SUCCESS,
        favs,
      };

      const expectedState = favs;
      expect(reducers.ads(initialState, action)).toEqual(expectedState);
    });

    describe("actions", () => {
      test("should handle ANY action", () => {
        const action = {
          type: TYPES.ANY_ACTION,
        };
        const expectedState = [];
        expect(reducers.ads(undefined, action)).toEqual(expectedState);
      });
    });
  });
});
