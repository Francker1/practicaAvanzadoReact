const user = {
    username: localStorage.getItem("user"),
    loggedIn: localStorage.getItem("loggedIn"),
}

export default {
    getUserInfo: () => user,
}