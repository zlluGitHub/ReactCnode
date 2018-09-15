import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertFromRaw } from 'draft-js';
import './editorComponent.css';
const content = { "entityMap": {}, "blocks": [{ "key": "637gr", "text": "Initialized from content state.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }] };
class EditorComponent extends Component {
    constructor(props) {
        super(props);
        const contentState = convertFromRaw(content);
        this.state = {
            // editorState: EditorState.createEmpty(),
            contentState
        };
    }

    onContentStateChange = (contentState) => {

        // console.log(convertToRaw(editorState.getCurrentContent()));
        console.log(JSON.stringify(contentState, null, 4));

        this.setState({
            contentState,
        });
    };

    render() {
        const { contentState } = this.state;
        return (
            <div>

                <Editor
                    // editorState={editorState}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    onEditorStateChange={this.onContentStateChange}
                />
                <div className="editor_buttons">
                    <input className="submit_btn" type="submit" data-loading-text="回复中.." value="回复" />
                </div>
            </div>
        );
    }
}

export default EditorComponent;

