import React from "react";
import "./Editor.scss";
const Editor = () => {
  return (
    <div className="editor-main">
      <div className="editor-header">
        <div className="button-container-1">x</div>
        <div className="button-container-2">y</div>
        <div className="button-container-3">z</div>
        <div className="button-container-4">w</div>
      </div>
      <div className="editor-text" contentEditable="true">
        text
      </div>
    </div>
  );
};
export default Editor;
