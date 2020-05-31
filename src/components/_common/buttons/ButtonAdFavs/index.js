import { connect } from "react-redux";
import { getItemsInFavs, getTotalFavsAds } from "../../../../store/selectors";

import ButtonAdFavs from "./ButtonAdFavs";

function mapStateToProps(state, ownProps) {

    return{
        isInFavs : getTotalFavsAds(state),
    }
}

export default connect(mapStateToProps)(ButtonAdFavs);