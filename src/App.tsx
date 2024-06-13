import React, { useState, useEffect } from 'react';
import MarkdownEditor from './components/Editor/MarkdownEditor';
import MarkdownPreview from './components/Preview/MarkdownPreview';
import CustomizationOptions from './components/Customization/CustomizationOptions';
import ExportButton from './components/Export/ExportButton';
import { marked } from 'marked';
import './App.css';

const DEFAULT_THEME = 'light';

const App: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [fontSize, setFontSize] = useState<number>(16);
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    const generateHtmlContent = async () => {
      const markedContent = await marked(content);
      setHtmlContent(markedContent);
    };

    generateHtmlContent();
  }, [content]);

  return (
    <div className="app">
      <div className="app__editor">
        <MarkdownEditor content={content} onContentChange={setContent} theme={DEFAULT_THEME} />
      </div>
      <div className="app__preview" style={{ fontSize: `${fontSize}px` }}>
        <MarkdownPreview content={content} fontSize={fontSize} />
      </div>
      <div className="app__customization">
        <CustomizationOptions fontSize={fontSize} onFontSizeChange={setFontSize} theme={DEFAULT_THEME}/>
      </div>
      <div className="app__export">
        <ExportButton htmlContent={htmlContent} />
      </div>
    </div>
  );
};

export default App;
