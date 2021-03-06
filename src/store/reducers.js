import * as TYPES from "./types";

const initialState = {
  user: {},
  ads: [],
  favs: {},
};

export function user(state = initialState.user, action) {
  switch (action.type) {
    case TYPES.REGISTER_USER_SUCCESS:
      return action.user;

    case TYPES.FETCH_USER_SUCCESS:
      return action.user;

    default:
      return state;
  }
}

export function ads(state = initialState.ads, action) {
  switch (action.type) {
    case TYPES.FETCH_ADS_SUCCESS:
      return action.ads;

    default:
      return state;
  }
}

export function favs(state = initialState.favs, action) {
  switch (action.type) {
    case TYPES.ADD_TO_FAVS_SUCCESS:
      return {
        ...state,
        [action.adId]: true,
      };

    default:
      return state;
  }
}
