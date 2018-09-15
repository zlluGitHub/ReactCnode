import React from 'react'
import { connect } from 'react-redux'
import { addTopics} from '../actions'
import AddTopic from '../components/Body/AddTopic/AddTopic';
const AddTopicContainer = props => <AddTopic {...props} />;
// const mapStateToProps = state => state;
const mapStateToProps = state => state;
export default connect(
    mapStateToProps,
    { addTopics}
)(AddTopicContainer);
