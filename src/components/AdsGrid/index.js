import { connect } from "react-redux";

import AdsGrid from "./AdsGrid";

import AdsService from "../../services/Ads";
import { addToFavs } from "../../store/actions";

function mapStateToProps(state, ownProps) {
    return {
        ads: AdsService.getAllAds(),
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addToFavs: adId => dispatch(addToFavs(adId)),
    };
}

// const mapDispatchToProps = {
//     addToFavs,
// };

export default connect(mapStateToProps, mapDispatchToProps)(AdsGrid);
