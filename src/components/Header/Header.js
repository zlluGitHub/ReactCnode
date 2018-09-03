import React, { Component } from 'react';
import logo from '../../images/cnodejs_light.svg'
import { Link } from 'react-router-dom';
import './header.css'
class Header extends Component {
    componentDidMount = () => {
        const accesstoken = sessionStorage.token
        if (accesstoken) {
            this.props.getUserData('login');
        }
    }
    handleLogin = (login) => {
        this.props.getUserData(login);
    }
    render() {
        const { status } = this.props
        // const sitting = !status ? (
        //     <li>
        //         <a href="javascript:void(0);" onClick={() => this.handleLogin('login')}>注册</a>
        //     </li>
        // ) : (
        //         <li>
        //             <a href="javascript:void(0);" onClick={() => this.handleLogin('logout')}>设置</a>
        //         </li>
        //     );
        const login = !status ? (
            <li>
                <span onClick={() => this.handleLogin('login')}>登录</span>
            </li>
        ) : (
                <li>
                    <span onClick={() => this.handleLogin('logout')}>退出</span>
                </li>
            );
        return (
            <div className="navbar" >
                <div className="navbar-inner">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <div className="seach">
                            <input type='text' />
                        </div>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>

                        {/* <li>
                            <a href="javascript:void(0);">未读消息</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">新手入门</a>
                        </li> */}
                        <li>
                            <a href="https://zllugithub.github.io">MyNoteBook</a>
                        </li>
                        <li>
                            <a href="https://github.com/zlluGitHub">MyGitHub</a>
                        </li>
                        {/* {sitting} */}
                        {login}
                    </ul>
                </div >
            </div>
        );
    }
}

export default Header;