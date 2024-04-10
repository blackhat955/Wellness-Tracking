import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../cards/cards';

const WorkContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos(); // Initial fetch on component mount
  }, []); // Empty dependency array to run the effect once

  const fetchVideos = () => {
    axios.get('http://localhost:3001/auth/videos')
      .then(response => {
        if (response.data && response.data.videos) {
          setVideos(response.data.videos);
        }
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  };
    const handleVideoClick = (url) => {
        console.log('Video URL:', url);
    }
  

  return (
    <div className='container'>
      {videos.map((video, index) => (
        <Card
          key={index}
          name={video.name} // Assuming 'name' is the video name or title
          image={video.thumbnail} // Assuming 'thumbnail' is the URL to the video thumbnail image
          onClick={() => handleVideoClick(video.url)} // Assuming 'url' is the URL to the video file
        />
      ))}
    </div>
  );
};

export default WorkContainer;
