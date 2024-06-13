import React from 'react';
import { useMarkdown } from '../../hooks/useMarkdown';
import './MarkdownPreview.css';

interface MarkdownPreviewProps {
    content: string;
    fontSize: number;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ content, fontSize }) => {
    const htmlContent = useMarkdown(content);

    return <div className="markdown-preview" style={{ fontSize: `${fontSize}px` }} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default MarkdownPreview;
