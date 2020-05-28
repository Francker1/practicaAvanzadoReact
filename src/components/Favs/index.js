import { connect } from "react-redux";

import Favorites from "./Favs";
import { getItemsFavs } from "../../store/selectors";

function mapStateToProps(state, ownProps){
    return{
        items: getItemsFavs(state),
    }
}

export default connect(mapStateToProps)(Favorites);
