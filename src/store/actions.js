import * as TYPES from "./types";
//import AdsService from "../services/Ads";
import * as KeepAds_API from "../services/KeepAds_API";

//actions creators
export const setAds = ads => ({
    type: TYPES.FETCH_ADS_REQUEST,
    ads,
});


export const fetchAdsRequest = () => ({
    type: TYPES.FETCH_ADS_REQUEST,
});

export const fetchAdsFailure = (error) => ({
    type: TYPES.FETCH_ADS_FAILURE,
    error,
});

export const fetchAdsSuccess = (ads) => ({
    type: TYPES.FETCH_ADS_SUCCESS,
    ads,
});


export const fetchAds = () => 
    async function (dispatch, getState) {
        dispatch(fetchAdsRequest());
        try{
            const ads = await KeepAds_API.getAllAds();
            //console.log("eeeee");
            dispatch(fetchAdsSuccess(ads));
        } catch(err){
            dispatch(fetchAdsFailure(err));
        }
    };



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
