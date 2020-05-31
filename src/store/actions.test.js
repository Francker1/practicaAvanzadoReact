import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "./actions";
import * as TYPES from "./types";

import AdsService from "../services/Ads";

jest.mock("../services/Ads");

const middlewares = [thunk.withExtraArgument({ AdsService })];
const mockStore = configureStore(middlewares);
const store = mockStore({});

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

  describe("fetchAds", () => {
    test("should dispatch FETCH_BIKES_REQUEST and FETCH_BIKES_SUCCESS actions", async () => {
      const dispatch = jest.fn();
      const action = actions.fetchAds();
      const getState = () => {};
      const ads = [];
      AdsService.getAllAds.mockResolvedValue(ads);

      await action(dispatch, getState);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: TYPES.FETCH_ADS_REQUEST,
      });

      expect(AdsService.getAllAds).toHaveBeenCalled();

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: TYPES.FETCH_ADS_SUCCESS,
        ads,
      });
    });
  });

  describe("fetchUser", () => {
    beforeEach(async () => {
      await store.dispatch(actions.fetchUser());
    });

    test("should dispatch actions", () => {
      const user = {
        username: localStorage.getItem("user"),
        loggedIn: localStorage.getItem("loggedIn"),
      };
      const expectedActions = [
        { type: TYPES.FETCH_USER_REQUEST },
        { type: TYPES.FETCH_USER_SUCCESS, user },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
