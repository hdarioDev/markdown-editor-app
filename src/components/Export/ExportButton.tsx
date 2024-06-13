import React from 'react';
import './ExportButton.css';

interface ExportButtonProps {
  htmlContent: string;
}

const ExportButton: React.FC<ExportButtonProps> = ({ htmlContent }) => {
  const downloadHtml = () => {
    const element = document.createElement('a');
    const file = new Blob([htmlContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'export.html';
    document.body.appendChild(element);
    element.click();
  };

  return <button className="export-button" onClick={downloadHtml}>Export HTML</button>;
};

export default ExportButton;
