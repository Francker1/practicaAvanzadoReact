import * as TYPES from "./types";

const initialState = {
    user: {},
    ads: [],
    filters: "",
    favs: {},
};

export function user(state = initialState.user, action) {
    switch (action.type) {
        case TYPES.REGISTER_USER:
            return action.user;

        case TYPES.LOGIN_USER:
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

export function filters(state = initialState.filters, action) {
    switch (action.type) {
        case TYPES.SET_FILTERS:
            return action.filters;

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

        case TYPES.REMOVE_FROM_FAVS:
            return state.filter(ad => ad._id !== action.adId);

        default:
            return state;
    }
}
