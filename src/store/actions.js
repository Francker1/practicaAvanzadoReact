import * as TYPES from "./types";

//actions creators
export const setAds = ads => ({
    type: TYPES.FETCH_ADS_REQUEST,
    ads,
});

export const setFilters = filters => ({
    type: TYPES.SET_FILTERS,
    filters,
});

export const addToFavs = adId => ({
    type: TYPES.ADD_TO_FAVS,
    adId,
});

export const removeFromFavs = adId => ({
    type: TYPES.REMOVE_FROM_FAVS,
    adId,
});

export const registerUser = user => ({
    type: TYPES.REGISTER_USER,
    user,
});

export const loginUser = user => ({
    type: TYPES.LOGIN_USER,
    user,
});
