const ads = [
    {
        description: "description test",
        name: "nametest",
        photo: "https://cdn.pixabay.com/photo/2020/02/23/11/36/castle-4873097__340.jpg",
        price: 97,
        tags: ["lifestyle"],
        type: "buy",
        _id: "5e4af7273976de16b4d34277",
        createdAt: "2015-05-26",
        updatedAt: "2015-05-28",
    },
    { 
        description: "undefined",
        name: "name",
        photo: "https://cdn.pixabay.com/photo/2020/02/12/16/13/landscape-4843193__340.jpg",
        price: 120,
        tags: ["work", "lifestyle", "motor"],
        type: "buy",
        _id: "5e53fb503976de16b4d343d0",
        createdAt: "2015-05-26",
        updatedAt: "2015-05-28",
    },
    {
        description: "a real dog of a dog",
        name: "Dog",
        photo: "https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/5/37/5378ee1c-f8cd-11e3-bba6-0019bb2963f4/53a4bb4276196.image.jpg",
        price: 0.1,
        tags: [],
        type: "sell",
        _id: "5e551d2e3976de16b4d343f2",
        createdAt: "2015-05-26",
        updatedAt: "2015-05-28",
    },
    {
        description: "prueba de endpoint de la api",
        name: "pruebaApi",
        photo: "no photo",
        price: 28,
        tags: ["lifestyle"],
        type: "buy",
        _id: "5e578e963976de16b4d344b6",
        createdAt: "2015-05-26",
        updatedAt: "2015-05-28",
    }
];

export default {
    getAllAds: () => ads,
}