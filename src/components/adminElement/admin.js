import React, { useState } from 'react';
import './admin.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPage = () => {
  const [contentMode, setContentMode] = useState('');
  const [contentType, setContentType] = useState('');
  const [description, setDescription] = useState('');
  const [sepeciality, setSpeciality] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [type, setType] = useState('');
  const [fileType, setFileType] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [instructorName, setInstructorName] = useState('');

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
    setFileType(event.target.files[0].type);
  };
  const creatdata = async () => {
  
    const formData = new FormData();
    formData.append('file', videoFile);
    formData.append('mode', contentMode);
    formData.append('speciality', sepeciality);
    formData.append('description', description);
    formData.append('instructorName', instructorName);
    formData.append('location', location);
    formData.append('experience', experience);
    formData.append('type', type);
   
  
    // Check if videoFile is not null or undefined
    for (const [key, value] of formData.entries()) {
      console.log(`print the key and values from form data :${key}: ${value}`);
    } // Log the form data to check its contents
  
    return formData;
  }
  
  const handleUpload = async () => {
    try {
          const data=await creatdata();

          const response = await axios.post('http://localhost:3001/video/uploadVideo', data);
          console.log('Upload response:', response.data);
    
          // If you need to update UI or show a message after successful upload, you can do it here
        } catch (error) {
          console.error('Error uploading video:', error);
          // Handle error and display a message to the user if needed
        }
      // setUploadMessage(response.data.message);
    } 

  return (
    <div className="admin-page">
      <h2>Upload Video</h2>
      <select value={contentMode} onChange={(e) => setContentMode(e.target.value)}>
        <option value="">Select Content Mode</option>
        <option value="MP4">MP4</option>
        <option value="AVI">AVI</option>
      </select>
      {/* specility */}
      <select value={sepeciality} onChange={(e) => setSpeciality(e.target.value)}>
        <option value="">Select Sepeciality</option>
        <option value="Cardio">Cardio</option>
        <option value="Upper Training">Upper Training</option>
      </select>
       {/* location */}
       <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">Select Location</option>
        <option value="Texas">Texas</option>
        <option value="Bloomington">Bloomington</option>
      </select>

        {/* experience */}
      <select value={experience} onChange={(e) => setExperience(e.target.value)}>
        <option value="">Select Experience</option>
        <option value="10 years">10 years</option>
        <option value="5 years">5 years</option>
      </select>
      {/* type */}
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="Home">Home</option>
        <option value="Outdoor">Outdoor</option>
      </select>
      <input
        type="text"
        placeholder="ex : John Doe"
        value={instructorName}
        onChange={(event) => setInstructorName(event.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {/* {uploadMessage && <p>{uploadMessage}</p>} */}

      <ToastContainer/>
    </div>
  );
};

export default AdminPage;
