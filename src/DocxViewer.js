import React, { useEffect, useState } from 'react';
import mammoth from 'mammoth';

const DocxViewer = ({ fileUrl }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => mammoth.convertToHtml({ arrayBuffer: blob.arrayBuffer() }))
      .then(result => setContent(result.value))
      .catch(error => console.error('Error converting file:', error));
  }, [fileUrl]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default DocxViewer;
