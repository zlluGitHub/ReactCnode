import React, { Component } from 'react';
import './nav.css'
class Nav extends Component {
    state = {
        tab: "all"
    }
    handleClick = tab => {
        const nowTab = this.props.tab
        if (tab !== nowTab) {
            this.props.changeTab(tab)
            this.props.getTopics(tab)
            this.setState({
                tab: tab
            })
        }
    }
    render() {
        const { tab } = this.state

        return (
            <div className="select-nav">
                <ul>
                    <li onClick={() => this.handleClick('all')} className={tab === "all" ? "active" : ""}>全部</li>
                    <li onClick={() => this.handleClick('good')} className={tab === "good" ? "active" : ""}>精华</li>
                    <li onClick={() => this.handleClick('share')} className={tab === "share" ? "active" : ""}>分享</li>
                    <li onClick={() => this.handleClick('ask')} className={tab === "ask" ? "active" : ""}>问答</li>
                    <li onClick={() => this.handleClick('job')} className={tab === "job" ? "active" : ""}>招聘</li>
                </ul>
            </div>
        );
    }
}
export default Nav;