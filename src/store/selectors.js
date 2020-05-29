export const getAds = state => state.ads;
export const getFavs = state => state.favs;

export function getTotalFavsAds(state){
    const favs = getFavs(state).length;
    return favs;
}

export function getItemsFavs(state){

    const ads = getAds(state);
    const favs = getFavs(state);

    const data = favs.map(search => {
        const ad = ads.find(ad => ad._id === search);
        return { ...ad };
      });

    return data;
}