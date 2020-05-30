import { connect } from "react-redux";

import AdsGrid from "./AdsGrid";

import { addToFavs } from "../../store/actions";
import { getUserInfo } from "../../store/selectors";

function mapStateToProps(state, ownProps) {
    return {
        ads: state.ads,
        user: getUserInfo(state),
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addToFavs: adId => dispatch(addToFavs(adId)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AdsGrid);
