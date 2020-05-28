import { connect } from "react-redux";

import AdsGrid from "./AdsGrid";

import { addToFavs } from "../../store/actions";

function mapStateToProps(state, ownProps) {
    return {
        ads: state.ads,
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
