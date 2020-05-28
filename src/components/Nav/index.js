import { connect } from "react-redux";
import { getTotalFavsAds } from "../../store/selectors";

import Navbar from './Nav';


function mapStateToProps(state, ownProps) {
    return {
        totalFavAds: getTotalFavsAds(state),
    }
}

export default connect(mapStateToProps)(Navbar);