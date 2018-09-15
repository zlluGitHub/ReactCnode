import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw } from 'draft-js';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editorComponent.css';
class EditorComponent extends Component {
    state = {
        editorState: EditorState.createEmpty()
    };
    componentDidMount = () => {
        const {getArticle,replyState ,articleId } = this.props;
        if(replyState.success){
            if(articleId){
                getArticle(articleId);
            }
        }    
    };
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    submitReply = (editorState) => {
        const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        const { addReply,articleId} = this.props;
        addReply(content,articleId);
        this.setState({
            editorState: EditorState.createEmpty()
        });  
    };
    render() {
        const { editorState } = this.state; 
       
        return (
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
        );
    }
}

export default EditorComponent;

