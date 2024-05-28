import React, { useState } from 'react';
import './App.css'; // Ensure Tailwind is imported in this CSS file
import PDFViewer from './PDFViewer';
import DocxViewer from './DocxViewer';
import DocumentUploader from './DocumentUploader';
import Toolbar from './Toolbar';
import useContacts from './hooks/useContacts'; // Assuming this hook manages contacts

function App() {
  const [fileUrl, setFileUrl] = useState(null);
  const [fileType, setFileType] = useState('');
  const [message, setMessage] = useState(''); // State to manage message input
  const { contacts, addContact, contactEmail, setContactEmail } = useContacts();

  const handleFileUpload = (file, type) => {
    try {
      const fileURL = URL.createObjectURL(file);
      setFileUrl(fileURL);
      setFileType(type);
    } catch (error) {
      console.error('Error loading file:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/4 p-4 bg-white">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mb-4">
          Add file to sign
        </button>
        <DocumentUploader onFileUpload={handleFileUpload} />
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={addContact} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
            + Add contact
          </button>
        </div>
        <div className="mt-4">
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded p-2 w-full"
            rows="3"
          ></textarea>
        </div>
        <div className="mt-4 flex justify-around">
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
            Help
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
            Settings
          </button>
        </div>
      </aside>
      <main className="w-3/4 flex flex-col items-center p-4 bg-gray-200">
        <Toolbar />
        {fileType === 'pdf' ? <PDFViewer fileUrl={fileUrl} /> : <DocxViewer fileUrl={fileUrl} />}
      </main>
    </div>
  );
}

export default App;
