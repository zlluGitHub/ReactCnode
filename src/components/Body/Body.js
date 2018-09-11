import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './body.css';
import User from './User/User';
import TopicsContainer from '../../containers/TopicsContainer';
import ArticleContainer from '../../containers/ArticleContainer';
import AddTopic from './AddTopic/AddTopic';
import UserTopicsContainer from '../../containers/UserTopicsContainer';
class Body extends Component {
    render() {
        const { userData ,getUserTopics} = this.props;
        
        return (
            <div className="main">
                <div className="content">
                    <Route path="/" exact component={TopicsContainer} />
                    <Route path="/topics/create" component={AddTopic} />
                    <Route path="/topic/:id" component={ArticleContainer} />
                    <Route path="/user" component={UserTopicsContainer} />
                </div>
                <div className="sidebar">
                    <User userData={userData} getUserTopics={getUserTopics}/>
                    <div className="panel">
                        <div className="inner">
                            <span><Link to="/topics/create">发布话题</Link></span>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="top">
                            <span>
                                无人回复的话题
                            </span>
                        </div>
                        <div className="inner">
                            <ul>
                                <li><Link to="/">zdfgbtfgbr</Link></li>
                                <li><Link to="/">zdfgbtfgbr</Link></li>
                                <li><Link to="/">zdfgbtfgbr</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;