import React, { Component } from 'react';
import './user.css';
import { Link } from 'react-router-dom';
class User extends Component {
    onGetUserTopics(loginname){
        const {getUserTopics}=this.props;
        getUserTopics(loginname);
        
    }
    render() {
        const userData = this.props.userData;     
        const userMessage = !userData.status ? (
            
            <div>
                <div className="top">
                    <span>
                        个人信息
                    </span>
                </div>
                <div className="inner">
                    <div className="user-card">
                        CNode：Node.js专业中文社区
                    </div>
                    <div>
                        您可以 登录 或 注册 , 也可以
                    </div>
                </div>
            </div>
        ) : (
                <div>
                    <div className="top">
                        <span>
                            个人信息
                        </span>
                    </div>
                    <div className="inner">

                        <div className="user-card">
                            <Link  to="/user" onClick={()=>this.onGetUserTopics(userData.userData.loginname)}>
                                <img src={userData.userData.avatar_url} alt={userData.userData.loginname} />
                            </Link>
                            <span>{userData.userData.loginname}</span>
                        </div>
                        <div>
                            积分：<span>0</span>
                        </div>
                        <div>
                            <span className="signature">
                                “这家伙很懒，什么个性签名都没有留下。”
                    </span>
                        </div></div>
                </div>
            )
        return (
            <div className="panel">
                {userMessage}
            </div>
        );
    }
}
export default User;