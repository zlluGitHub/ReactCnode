import React from 'react'
import { connect } from 'react-redux'
import { addTopics } from '../actions'
import UserTopics from '../components/Body/UserTopics/UserTopics';

const UserTopicsContainer = props => <UserTopics {...props} />;
const mapStateToProps = state => state;
// const mapStateToProps = state => ({
//     topics: state.topics,
//     tab: state.tab
// })
export default connect(
    mapStateToProps,
    { addTopics }
)(UserTopicsContainer);
