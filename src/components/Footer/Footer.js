import React, { Component } from 'react';
import './footer.css'
import dil from '../../images/dil.PNG';
import qiniu from '../../images/qiniu.PNG';
import ucl from '../../images/ucl.PNG'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-inner">
                    <div>
                        <a href="/">RSS</a>
                        <span>|</span>
                        <a href="/">源码地址</a>
                    </div>
                    <p>
                        CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
                    </p>
                    <p>
                        服务器赞助商为 <a href="/"><img src={ucl} alt="uli" /></a> ，存储赞助商为 <a href="/"><img src={qiniu} alt="qiniu" /></a> ，由 <a href="/"><img src={dil} alt="dil" /></a> 提供应用性能服务。
                    </p>
                    <p>
                        新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="/">DigitalOcean(https://www.digitalocean.com/)</a>
                    </p>
                </div>

            </div>
        );
    }
}

export default Footer;