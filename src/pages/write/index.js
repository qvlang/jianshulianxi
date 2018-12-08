import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { EditorState } from 'draft-js';
import { Redirect } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorWrap, ButtonWarp, Button } from './style';

class Write extends PureComponent {
  constructor (props) {
    super(props);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.onContentStateChange = this.onContentStateChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      editorState :EditorState.createEmpty(),
      contentState: {}
    }
  }
  render () {
    const { isLogin } = this.props;
    const { editorState, contentState } = this.state;
    if (isLogin) {
       return (
        <div>
          <EditorWrap>
            <Editor
            editorState={editorState}
            initialContentState={contentState}
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onContentStateChange}
            />
          </EditorWrap>
          <ButtonWarp>
            <Button onClick={this.handleSave}>保存</Button>
            <Button onClick={this.handleSubmit}>发表</Button>
          </ButtonWarp>
        </div>
      )
    }else{
      return (
        <Redirect to="/login" />
      )
    }
  }
  onEditorStateChange = (editorState) =>{
    this.setState({
      editorState
    });
  }
  onContentStateChange = (contentState) => {
    this.setState({
      contentState
    });
  }
  handleSave () {
    console.log(draftToHtml(this.state.contentState));
  }
  handleSubmit () {
    
  }
}

const mapState = (state)=> ({
  isLogin: state.getIn(["login","isLogin"])
});

const mapDispatch = (dispatch)=> ({
});

export default connect(mapState, mapDispatch)(Write);
