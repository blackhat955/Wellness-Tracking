import React, { useEffect, useState } from "react";
import axios from "axios";
import "./videoComponent.css";

const VideoCard = ({ videoUrl,title, instructor, speciality, type, date,experience,location }) => {
    return (
        <div className="card">
            <video className="video" controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <div className="title">{title}</div>
                <div className="description">
                    <div className="field">
                        <span className="label">Instructor:</span> {instructor}
                    </div>
                    <div className="field">
                        <span className="label">Speciality:</span> {speciality}
                    </div>
                    <div className="field">
                        <span className="label">Type:</span> {type}
                    </div>
                    <div className="field">
                        <span className="label">Date:</span> {date}
                    </div>
                    <div className="field">
                        <span className="label">Location:</span> {location}
                    </div>
                    <div className="field">
                        <span className="label">Experties:</span> {experience}
                    </div>
                </div>
            </div>
        </div>
    );
};

const VideoGallery = () => {
    const [videos, setVideos] = useState([]);
    // const apiUrl = " 'http://localhost:3001/video/getVideos"; // Update with your API URL

    useEffect(() => {
        // Fetch video URLs, titles, and descriptions from your backend
        const fetchVideos = async () => {
            try {
                const response = await axios.get('http://localhost:3001/video/getVideos');
                console.log('Response:', response.data);
                setVideos(response.data.videos);
              } catch (error) {
                console.error('Error fetching videos:', error);
              }
        };

        fetchVideos();
    }, []);

    return (
        <div className="video-gallery">
            {videos.map((video, index) => (
                 <VideoCard
                     key={index}
                     videoUrl={video.file}
                     type={video.type}
                     speciality={video.speciality}
                     instructor={video.instructorName}
                     location={video.location}
                     experience={video.experience}
                    date={video.date}
                />
            ))}
        </div>
    );
};

export default VideoGallery;
