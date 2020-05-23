import * as TYPES from "./types";

const initialState = {
    ads: [],
    user: {
        username: "ifranco",
        loggedIn: true,
    },
    filters: "",
    favs: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TYPES.FETCH_ADS_REQUEST:
            return {
                ...state,
                ads: action.ads,
            };

        case TYPES.SET_FILTERS:
            return {
                ...state,
                filters: action.filters,
            };

        case TYPES.ADD_TO_FAVS:
            return {
                ...state,
                favs: [...state.ads, action.adId],
            };

        case TYPES.REMOVE_FROM_FAVS:
            return {
                ...state,
                favs: state.favs.filter(ad => ad !== action.adId),
            };

        case TYPES.REGISTER_USER:
            return {
                ...state,
                user: action.user,
            };

        case TYPES.LOGIN_USER:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
}

function ads(state = initialState.ads, action) {
    switch (action.type) {
        case TYPES.FETCH_ADS_REQUEST:
            return action.ads;

        default:
            return state;
    }
}

function filters(state = initialState.filters, action) {
    switch (action.type) {
        case TYPES.SET_FILTERS:
            return action.filters;

        default:
            return state;
    }
}

function favs(state = initialState.favs, action) {
    switch (action.type) {
        case TYPES.ADD_TO_FAVS:
            return [...state, action.adId];

        case TYPES.REMOVE_FROM_FAVS:
            return state.filter(ad => ad !== action.adId);

        default:
            return state;
    }
}

function user(state = initialState.user, action) {
    switch (action.type) {
        case TYPES.REGISTER_USER:
            return action.user;

        case TYPES.LOGIN_USER:
            return action.user;

        default:
            return state;
    }
}
