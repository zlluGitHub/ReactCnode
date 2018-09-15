import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw } from 'draft-js';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../EditorComponent/editorComponent.css';
import './addTopic.css';
import { Link } from 'react-router-dom';
class AddTopic extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        title:'title',
        tab:'dev',
    }; 
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    submitReply = (editorState) => {
        const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        const {addTopics} = this.props;
        console.log(this.props);
        
        addTopics( title,tab,content);
        this.setState({
            editorState: EditorState.createEmpty()
        });  
    };
    render() {
        const { editorState } = this.state; 
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
                <textarea rows="1" placeholder="标题字数 10 字以上"></textarea>
                </div>
                <div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    onFocus={(editorState) => {
                        //获得焦点执行
                    }}
                    value="你好"
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                        fontFamily: { options: ['宋体', '黑体', '楷体', '微软雅黑', 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana',] }
                    }}
                    mention={{
                        separator: 'dfvd ',
                        trigger: '@',
                        suggestions: [
                            { text: 'APPLE', value: 'apple', url: 'apple' },
                            { text: 'BANANA', value: 'banana', url: 'banana' },
                            { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                            { text: 'DURIAN', value: 'durian', url: 'durian' },
                            { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                            { text: 'FIG', value: 'fig', url: 'fig' },
                            { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                            { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
                        ],
                    }}
                />
                <div className="editor_buttons">
                    <input className="submit_btn" type="submit" data-loading-text="回复中.." value="回复" onClick={() => this.submitReply(editorState)} />
                </div>
            </div>
            </div>
        );
    }
}

export default AddTopic;