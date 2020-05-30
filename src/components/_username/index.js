import { connect } from "react-redux";

import Username from "./Username";

import { getUserInfo } from "../../store/selectors";


function mapStateToProps(state, ownProps) {
    return {
        user: getUserInfo(state),
    };
}



export default connect(mapStateToProps)(Username);