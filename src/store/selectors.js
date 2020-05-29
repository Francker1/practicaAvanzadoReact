export const getAds = state => state.ads;
export const getFavs = state => state.favs;

export function getTotalFavsAds(state){
    const favs = getFavs(state);
    return Object.keys(favs).length;
}

export function getItemsFavs(state){

    const ads = getAds(state);
    const favs = getFavs(state);

    const data = Object.entries(favs).map(entry => {
        const [adId] = entry;
        const ad = ads.find(ad => ad._id === adId);
        return { ...ad };
      });

    return data;
}

export function getItemsInFavs(state){
    const favs = getFavs(state);
    return Object.values(favs);
}
