import React from 'react';
import { connect } from 'react-redux';
import { getArticle, collectArticle, cancleCollectArticle, replyUps ,addReply} from '../actions';
import Article from '../components/Body/Article/Article';
const ArticleContainer = props => <Article {...props} />;
const mapStateToProps = state => state;
// const mapStateToProps = state => ({
//     topics: state.topics,
//     tab: state.tab
// })
export default connect(
    mapStateToProps,
    { getArticle, collectArticle, cancleCollectArticle, replyUps,addReply }
)(ArticleContainer);
