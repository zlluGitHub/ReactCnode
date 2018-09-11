import React from 'react'
import { connect } from 'react-redux'
import { addTopics ,getUserTopics} from '../actions'
import UserTopics from '../components/Body/UserTopics/UserTopics';

const UserTopicsContainer = props => <UserTopics {...props} />;
// const mapStateToProps = state => state;
const mapStateToProps = state => ({
    data:state.userData.userData
})
export default connect(
    mapStateToProps,
    { addTopics ,getUserTopics}
)(UserTopicsContainer);
