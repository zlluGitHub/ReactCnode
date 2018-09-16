import React, { Component } from 'react';
import './popUp.css';
class PopUp extends Component {
    render() {
        return (
            <div className="box">
                <div className="modal">
                    <div className="madal-top">
                        <span>提示！</span>
                        <span>X</span>
                    </div>
                    <div className="madal-middle">
                        <div>内容</div>
                    </div>
                    <div className="madal-down">
                        <span>提示！</span>
                        <span>X</span>
                    </div>     
                </div>
            </div>
        );
    }
}

export default PopUp;