import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './topiclist.css';

import MomentComponent from './MomentComponent';

class TopicList extends Component {
   
    
    onGetUserTopics(loginname){
        const {getUserTopics}=this.props;
        getUserTopics(loginname);
        
    }
    render() {
        const { topics } = this.props;
     console.log(this.props);
        const showList = topics ? topics.map(data => {
            const { id, author, top, tab, good, reply_count, visit_count, title, last_reply_at } = data;
            const replySum=visit_count?
            <strong>
                <span>{reply_count}</span>/<span>{visit_count}</span>
            </strong>             
            :<div></div>;
            return (
                <li className="single_title" key={id}>
                    <div>
                        <Link to="/user" onClick={()=>this.onGetUserTopics(author.loginname)}><img src={author.avatar_url} alt={author.loginname} title={author.loginname} /></Link>
                        {replySum}
                        <span className={top ? "active" : good ? "active" : ""}>{top ? "置顶" : good ? "精华" : tab === "share" ? "分享" : "问答"}</span>
                        <Link to={`/topic/${id}`} className="topic_title">{title}</Link>
                    </div>
                    <div className="update_time">
                        <Link to="/">
                            <span><MomentComponent time={last_reply_at} /></span>
                        </Link>
                    </div>
                </li>
            );
        }) : <span>正在加载数据，请稍等。。。</span>;
        return (
            <div className="topic_list">
                <ul>
                    {showList}
                </ul>
            </div>
        );
    }
}
export default TopicList;


