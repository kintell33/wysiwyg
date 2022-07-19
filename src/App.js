import { useState } from "react";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div style={{display:'flex', height:'90vh'}}>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
      />
      <textarea
        style={{width:'40%', height:'100%'}}
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>
  );
}

export default App;
