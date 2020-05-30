import * as TYPES from "./types";
import AdsService from "../services/Ads";
import userService  from "../services/Users";
//actions creators

/**
 * Actions get Ads
 */
export const fetchAdsRequest = () => ({
    type: TYPES.FETCH_ADS_REQUEST,
});

export const fetchAdsSuccess = (ads) => ({
    type: TYPES.FETCH_ADS_SUCCESS,
    ads,
});

export const fetchAdsFailure = (error) => ({
    type: TYPES.FETCH_ADS_FAILURE,
    error,
});

export const fetchAds = () => 
    async function (dispatch, getState) {
        dispatch(fetchAdsRequest());
        try{
            const ads = await AdsService.getAllAds();
            dispatch(fetchAdsSuccess(ads));

        } catch(err){
            dispatch(fetchAdsFailure(err));
        }
    };



export const setFilters = filters => ({
    type: TYPES.SET_FILTERS,
    filters,
});


/**
 * Actions set Favorites Ads
 */
export const addToFavsRequest = () => ({
    type: TYPES.ADD_TO_FAVS_REQUEST,
});

export const addToFavsSuccess = adId => ({
    type: TYPES.ADD_TO_FAVS_SUCCESS,
    adId,
});

export const addToFavsFailure = error => ({
    type: TYPES.ADD_TO_FAVS_FAILURE,
    error,
});

export const addToFavs = adId => 
    async function(dispatch, getState){
        dispatch(addToFavsRequest());
        try{
            dispatch(addToFavsSuccess(adId)); 
        }catch(err){
            dispatch(addToFavsFailure(err)); 
        }
    };

export const removeFromFavs = adId => ({
    type: TYPES.REMOVE_FROM_FAVS,
    adId,
});



export const registerUser = user => ({
    type: TYPES.REGISTER_USER,
    user,
});


/**
 * Actions to get User data
 */

export const fetchUser = () => 
    async function (dispatch, getState) {
        dispatch(fetchUserRequest());
        try{
            const user = await userService.getUserInfo();
            dispatch(fetchUserSuccess(user));
        } catch(err){
            dispatch(fetchUserFailure(err));
        }
    };

export const fetchUserRequest = () => ({
    type: TYPES.FETCH_USER_REQUEST,
});

export const fetchUserSuccess = user => ({
    type: TYPES.FETCH_USER_SUCCESS,
    user,
});

export const fetchUserFailure = error => ({
    type: TYPES.FETCH_USER_FAILURE,
    error,
});
