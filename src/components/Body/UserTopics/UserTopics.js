import React, { Component } from 'react';
import TopicList from '../TopicList/TopicList';
import './userTopics.css'
class UserTopics extends Component {
    // componentDidMount = () => {
    //     this.props.getUserTopics()
    //   };
    render() {
  
        console.log(this.props.data);
        const data = this.props.data;
        const inner = data?
            <div className="user_inner">
                <div>
                    <img src={data.avatar_url} alt={data.loginname}/>
                    <span>{data.loginname}</span>
                </div>
                <p>40积分</p>
                <p><a href="">{data.recent_replies?data.recent_replies.length:0}个收藏话题</a> </p>
                <p><a href="">www.zhneglinglu.cn</a></p>
                <p><span>杭州</span></p>
                <p><span>github</span></p>
                <p>注册时间<span>3</span>年前</p>
            </div>:<div className="user_inner">正在加载中。。。</div>;
        const createTopics = data?
            <div className="create_topics">
                <div className="header">
                    <span>最近创建的话题</span>
                </div> 
                <TopicList topics={data.recent_topics}/>
            </div>: <div className="create_topics"> 正在加载中。。。</div>;

        const partakeTopics = data?
            <div className="partake_topics">
                <div className="header">
                    <span>最近参与的话题</span>
                </div> 
                <TopicList topics={data.recent_replies}/>
                <div className="show_more">
                    <a href="">查看更多》</a>
                </div> 
            </div>: <div className="partake_topics"> 正在加载中。。。</div>;
        return (
            <div className="user_content">
                <div className="user_top">
                    <div className="header">
                        <span>主页</span>
                    </div> 
                    {inner}
                </div>
                {createTopics}
               {partakeTopics}
                
            </div>
        );
    }
}

export default UserTopics;