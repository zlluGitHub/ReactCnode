import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './body.css';
import User from './User/User';
import TopicsContainer from '../../containers/TopicsContainer';
import ArticleContainer from '../../containers/ArticleContainer';
import UserTopicsContainer from '../../containers/UserTopicsContainer';
import AddTopicContainer from '../../containers/AddTopicContainer';
class Body extends Component {
    // componentDidMount = () => {  
    //     const {getUserTopics} = this.props;
    //     if(sessionStorage.token){
    //       getUserTopics(sessionStorage.userName);
    //     }   
    // };
    render() {
        const { userData ,getUserTopics} = this.props;
        return (
            <div className="main">
                <div className="content">
                    <Route path="/" exact component={TopicsContainer} />
                    <Route path="/topics/create" component={AddTopicContainer} />
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
                                个人分享
                            </span>
                        </div>
                        <div className="inner">
                            <ul>
                                <li><a href="http://zhenglinglu.cn/index.html">博客分享</a> </li>
                                <li><a href="https://zllugithub.github.io/">Web前端知识整合</a> </li>
                                <li><a href="https://github.com/zlluGitHub">GitHub仓库</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;