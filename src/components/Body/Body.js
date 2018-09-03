import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './body.css';
import User from './User/User';
import TopicsContainer from '../../containers/TopicsContainer';
import ArticleContainer from '../../containers/ArticleContainer';
class Body extends Component {
    render() {
        const { userData } = this.props
        return (
            <div className="main">
                <div className="content">
                    <Route path="/" exact component={TopicsContainer} />
                    <Route path="/topic/:id" exact component={ArticleContainer} />
                </div>
                <div className="sidebar">
                    <User userData={userData} />
                    <div className="panel">
                        <div className="inner">
                            <span>发布话题</span>
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