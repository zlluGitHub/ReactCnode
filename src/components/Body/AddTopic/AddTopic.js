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
        title:'no',
        tab:'no'
    }; 
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    submitReply = (editorState) => {
        const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        const {addTopics} = this.props;
        const {title,tab}=this.state;
        if(title!='no'&&tab!='no'){
            if(addTopics){
                addTopics( title,tab,content);
            }
        }else{
            alert("请选择板块或添加标题！")
        }
        this.setState({
            editorState: EditorState.createEmpty()
        });  
    };
    handleChange(e) {
        this.setState({
            title:e.target.value
        })
    }
    handleSelectChange(e){
        this.setState({
            tab:e.target.value
        })
    }
    render() {
        const { editorState } = this.state; 
        return (
            <div className="addtopic">
                <div className="header">
                    <span><Link to="/">主页</Link>/<span>发布话题</span> </span>
                </div> 
                <div className="select">
                    <span>选择版块：</span>
                    <select  onChange={e => this.handleSelectChange(e)}>
                        <option value ="no">请选择</option>
                        <option value ="ask">分享</option>
                        <option value="share">问答</option>
                        <option value="job">招聘</option>
                        <option value="dev">客户端测试</option>
                    </select>
                </div>
                <div className="input">
                <textarea rows="1" placeholder="标题字数 10 字以上" onChange={e => this.handleChange(e)}></textarea>
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