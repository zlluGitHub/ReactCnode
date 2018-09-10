import React, { Component } from 'react';
import EditorComponent from '../EditorComponent/EditorComponent';
import './addTopic.css';
import { Link } from 'react-router-dom';
class AddTopic extends Component {
    render() {
        return (
            <div className="addtopic">
                <div className="header">
                    <span><Link to="/">主页</Link>/<span>发布话题</span> </span>
                </div> 
                <div className="select">
                    <span>选择版块：</span>
                    <select>
                        <option value ="请选择">请选择</option>
                        <option value ="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="input">
                <textarea autofocus="" class="span9" id="title" name="title" rows="1" placeholder="标题字数 10 字以上"></textarea>
                </div>
                <EditorComponent/>
            </div>
        );
    }
}

export default AddTopic;