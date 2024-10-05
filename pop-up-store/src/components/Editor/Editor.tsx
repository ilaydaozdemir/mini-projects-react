import React from "react";
import "./Editor.scss";

import SubjectIcon from "@mui/icons-material/Subject";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import SegmentIcon from "@mui/icons-material/Segment";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import SubscriptIcon from "@mui/icons-material/Subscript";

import Dropdown from "./subComponents/Dropdown/Dropdown";
import Link from "./subComponents/Link/Link";
const Editor = () => {
  return (
    <div className="editor-main">
      <div className="editor-header">
        <div className="button-container-1">
          <button>
            <SubjectIcon />
          </button>
          <button>
            <FormatAlignJustifyIcon />
          </button>
          <button>
            <SegmentIcon />
          </button>
        </div>
        <div className="button-container-2">
          <Dropdown />
          <Link />
        </div>
        <div className="button-container-3">
          <button>
            <FormatBoldIcon />
          </button>
          <button>
            <FormatItalicIcon />
          </button>
          <button>
            <FormatStrikethroughIcon />
          </button>
          <button>
            <FormatUnderlinedIcon />
          </button>
        </div>
        <div className="button-container-4">
          <button>
            <SuperscriptIcon />
          </button>
          <button>
            <SubscriptIcon />
          </button>
        </div>
      </div>
      <div className="editor-text" contentEditable="true">
        text
      </div>
    </div>
  );
};
export default Editor;
