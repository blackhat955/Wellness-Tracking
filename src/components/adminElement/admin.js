import React, { useState } from 'react';
import './admin.css';
import axios from 'axios';

const AdminPage = () => {
  const [contentMode, setContentMode] = useState('');
  const [contentType, setContentType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileType, setFileType] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
    setFileType(event.target.files[0].type);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('contentMode', contentMode);
      formData.append('contentType', contentType);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('videoFile', videoFile);

      const response = await axios.post('/api/uploadVideo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      setUploadMessage(response.data.message);
    } catch (error) {
      console.error('Error uploading video:', error);
      setUploadMessage('An error occurred while uploading the video.');
    }
  };

  return (
    <div className="admin-page">
      <h2>Upload Video</h2>
      <select value={contentMode} onChange={(e) => setContentMode(e.target.value)}>
        <option value="">Select Content Mode</option>
        <option value="Mode 1">MP4</option>
        <option value="Mode 2">AVI</option>
      </select>
      <select value={contentType} onChange={(e) => setContentType(e.target.value)}>
        <option value="">Select Content Type</option>
        <option value="Type 1">HOME</option>
        <option value="Type 2">GYM</option>
      </select>
      <input
        type="text"
        placeholder="ex : Morning Exercise"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {/* {uploadMessage && <p>{uploadMessage}</p>} */}
    </div>
  );
};

export default AdminPage;
