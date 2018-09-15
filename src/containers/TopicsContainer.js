import React from 'react'
import { connect } from 'react-redux'
import { getTopics, changeTab, changePages, getUserData ,getUserTopics} from '../actions'
import Topics from '../components/Body/Topics/Topics';
const TopicsContainer = props => <Topics {...props} />;
const mapStateToProps = state => state;
// const mapStateToProps = state => ({
//     topics: state.topics,
//     tab: state.tab
// })
export default connect(
    mapStateToProps,
    { getTopics, changeTab,getUserTopics, changePages, getUserData }
)(TopicsContainer);
