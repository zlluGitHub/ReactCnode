import React, { Component } from 'react';
import './pages.css';
class Pages extends Component {
    state = {
        active: 1
    }
    handleClick = pageNumber => {
        const nowTab = this.props.tab;
        this.setState({
            active: pageNumber
        })
        this.props.changePages(nowTab, pageNumber)
    }
    render() {
        const { active } = this.state
        console.log(active);


        return (
            <div className="page-nav">
                <ul>
                    <li onClick={() => this.handleClick('all')}>{"<<"}</li>
                    <li onClick={() => this.handleClick('1')} className={active === '1' ? "active" : ""}>1</li>
                    <li onClick={() => this.handleClick('2')} className={active === '2' ? "active" : ""}>3</li>
                    <li onClick={() => this.handleClick('3')} className={active === '3' ? "active" : ""}>4</li>
                    <li onClick={() => this.handleClick('4')} className={active === '4' ? "active" : ""}>2</li>
                    <li onClick={() => this.handleClick('5')} className={active === '5' ? "active" : ""}>5</li>
                    <li onClick={() => this.handleClick('6')} className={active === '6' ? "active" : ""}>...</li>
                    <li onClick={() => this.handleClick('45')} className={active === '45' ? "active" : ""}>>></li>
                </ul>
            </div>
        );
    }
}

export default Pages;