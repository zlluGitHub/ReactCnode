import React, { Component } from 'react';
import TopicList from '../TopicList/TopicList';
import './userTopics.css'
class UserTopics extends Component {
    render() {
        return (
            <div className="user_content">
                <div className="user_top">
                    <div className="header">
                        <span>主页</span>
                    </div> 
                    <div className="user_inner">
                        <div>
                            <img src=""  alt=""/>
                            <span>name</span>
                        </div>
                        <p>40积分</p>
                        <p><a href="">2个收藏话题</a> </p>
                        <p><a href="">www.zhneglinglu.cn</a></p>
                        <p><span>杭州</span></p>
                        <p><span>github</span></p>
                        <p>注册时间<span>3</span>年前</p>
                    </div>
                </div>
                <div className="create_topics">
                    <div className="header">
                        <span>最近创建的话题</span>
                    </div> 
                    <TopicList/>
                </div>
                <div className="partake_topics">
                    <div className="header">
                        <span>最近创建的话题</span>
                    </div> 
                    <TopicList/>
                    <div className="show_more">
                       <a href="">查看更多》</a>
                    </div> 
                </div>
                
            </div>
        );
    }
}

export default UserTopics;