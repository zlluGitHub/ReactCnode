import React, { Component } from 'react';
import TopicList from '../TopicList/TopicList';
import Nav from '../Nav/Nav';
import Pages from '../Pages/Pages';
class Show extends Component {
    render() {
        const { topics, changeTab, getTopics, tab, changePages,getUserTopics } = this.props;
        console.log(this.props.topics.length);
        const topicsshow =  topics.length!=0?<div>
            <Nav changeTab={changeTab} tab={tab} getTopics={getTopics} />
            <TopicList topics={topics} getTopics={getTopics} getUserTopics={getUserTopics}/>
            <Pages tab={tab} changePages={changePages} />
        </div>:<div>
            正在加载数据请稍等。。。
        </div>
        return (
            <div>
                {topicsshow}
            </div>
        );
    }
}

export default Show;