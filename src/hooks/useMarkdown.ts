import { useState, useEffect } from 'react';
import { marked } from 'marked';

export const useMarkdown = (markdown: string) => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        setHtmlContent(marked(markdown));
    }, [markdown]);

    return htmlContent;
};
