import * as actions from "./actions";
import * as TYPES from "./types";

describe("actions", () => {
  describe("addToFavsSuccess", () => {
    test("should create one ADD_TO_FAVS_SUCCESS action with Advertisement ID", () => {
      const adId = "5e4974c23976de16b4d34260";
      const expectedAction = {
        type: TYPES.ADD_TO_FAVS_SUCCESS,
        adId,
      };

      expect(actions.addToFavsSuccess(adId)).toEqual(expectedAction);
    });
  });

  describe("registerUserSuccess", () => {
    test("should create one REGISTER_USER_SUCCESS action with user info", () => {
      const user = "inventUser";
      const expectedAction = {
        type: TYPES.REGISTER_USER_SUCCESS,
        user,
      };

      expect(actions.registerUserSuccess(user)).toEqual(expectedAction);
    });
  });
});
