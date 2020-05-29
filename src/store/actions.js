import * as TYPES from "./types";
//import AdsService from "../services/Ads";
import * as KeepAds_API from "../services/KeepAds_API";

//actions creators

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
            const ads = await KeepAds_API.getAllAds();
            dispatch(fetchAdsSuccess(ads));
        } catch(err){
            dispatch(fetchAdsFailure(err));
        }
    };



export const setFilters = filters => ({
    type: TYPES.SET_FILTERS,
    filters,
});


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

export const loginUser = user => ({
    type: TYPES.LOGIN_USER,
    user,
});

//crear un action

//a ese action le va a llegar el array de favs

//comprobar si el valor del id es true

//devolverlo si está en favs