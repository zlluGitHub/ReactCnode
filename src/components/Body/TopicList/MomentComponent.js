import React, { Component } from 'react';
import 'moment/locale/zh-cn';
import Moment from 'react-moment';
import 'moment';
class MomentComponent extends Component {
    render() {

        const last_reply_time = this.props.time
        return (
            // <div>dfg</div>
            <Moment fromNow>{last_reply_time}</Moment>
        );
    }
};

export default MomentComponent;