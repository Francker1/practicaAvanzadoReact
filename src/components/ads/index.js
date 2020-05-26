import { connect } from "react-redux";

import Ads from "./Ads";

import { setAds } from "../../store/actions";

function mapStateToProps(state, ownProps) {
    return {
        ads: state.ads,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        setAds: ads => dispatch(setAds(ads)),
    };
}

const connected = connect(mapStateToProps, mapDispatchToProps);
const AppConnected = connected(Ads);

export default AppConnected;
