import React from 'react';

const DocumentUploader = ({ onFileUpload }) => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type.includes('pdf') ? 'pdf' : 'docx';
      onFileUpload(file, fileType);
    }
  };

  return (
    <div className="p-2">
      <input
        type="file"
        accept=".pdf, .docx"
        onChange={handleUpload}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
    </div>
  );
};

export default DocumentUploader;
