import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import './MarkdownEditor.css';

interface MarkdownEditorProps {
  content: string;
  onContentChange: (content: string) => void;
  theme: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ content, onContentChange }) => {
  return (
    <CodeMirror
      value={content}
      height="300px"
      extensions={[markdown()]}
      onChange={(value) => {
        onContentChange(value);
      }}
      className="markdown-editor"
    />
  );
};

export default MarkdownEditor;
