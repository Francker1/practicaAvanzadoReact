export const getAds = state => state.ads;
export const getFavs = state => state.favs;

export function getTotalFavsAds(state){
    const favs = getFavs(state).length;
    return favs;
}

export function getItemsFavs(state){

    const ads = getAds(state);
    const favs = getFavs(state);
console.log(favs);
console.log(ads);
    // return favs.map(entry => {
    //     const ad = ads.find(ad => ad._id === entry);
    //     return { ...ad };
    //   });

    // return favs.map(entry => {
    //     const { adId } = entry;
    //     const ad = ads.find(ad => ad._id === adId);
    //     return { ...ad }
    // })

    return Object.entries(favs).map(entry => {
        const [ adId ] = entry;
        const ad = favs.find(ad => ad._id === adId);
        return { ...ad };
      });
   
}