import axios from "axios";


const KeepAdsAPI = API_URL => {

    return{

        /**
         * Method GET all Advertisements
         */
        getAllAds: () => {

            const url = `${API_URL}/anuncios`;

            axios.defaults.withCredentials = true;
            return axios.get(url).then(res => {
                return res.data.results
            })
        },

        getOneAd: adId => {
            
            const url = `${API_URL}/anuncios/${adId}`;
            
            axios.defaults.withCredentials = true;
            return axios.get(url).then(res => {
                return res.data.results
            })
        }, 

        getTags: () => {

            const url = `${API_URL}/tags`;

            axios.defaults.withCredentials = true;
            return axios.get(url)
            .then(res => {
                return res.data.results
            })
        },

        filterAds: () => {

            const params = new URLSearchParams(window.location.search);

            const adName = (params.get("name")) ? `name=${params.get("name")}` : "" ;
            const adVenta = (params.get("venta")) ? `venta=${params.get("venta")}` : "" ;
            const adTag = (params.get("tag")) ? `tag=${params.get("tag")}` : "" ;
            const adPrice = (params.get("pricemin")) || (params.get("pricemax")) ? `price=${params.get("pricemin")}-${params.get("pricemax")}` : "";

            axios.defaults.withCredentials = true;

            return axios.get(`${API_URL}/anuncios?${adName}&${adVenta}&${adTag}&${adPrice}`)
            .then(res => {
                return res.data.results
            })

        }, 

        createAd: ad => {

            const url = `${API_URL}/anuncios`;

            axios.defaults.withCredentials = true;

            return axios.post(url, null, {data: ad})
            .then(res => {
                return res.data.results
            })
        }, 

        editAd: (ad, adId) => {

            const url = `${API_URL}/anuncios/${adId}`;

            axios.defaults.withCredentials = true;

            return axios.put(url, null, {data: ad})
            .then(res => {
                return res.data.results
            })
        }, 

    }
}


export default KeepAdsAPI;