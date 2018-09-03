import React, { Component } from 'react';
import TopicList from '../TopicList/TopicList';
import Nav from '../Nav/Nav';
import Pages from '../Pages/Pages';
class Show extends Component {
    render() {
        const { topics, changeTab, getTopics, tab, changePages } = this.props;
        console.log(this.props);

        return (
            <div>
                <Nav changeTab={changeTab} tab={tab} getTopics={getTopics} />
                <TopicList topics={topics} getTopics={getTopics} />
                <Pages tab={tab} changePages={changePages} />
            </div>
        );
    }
}

export default Show;