import { useState, useEffect } from 'react';

interface Video { // Define the structure of the video object based on the expected response from the backend
  snippet: {
    title: string;
    description: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

export default function DailyVid() {

    // Define state variables for the video, loading status, and error message
    const [video, setVideo] = useState<Video | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const today = new Date().toDateString();  // Get today's date as a string to use for caching
        const cachedVideo = localStorage.getItem('dailyVideo'); // Check if there is a cached video in localStorage
        const cachedDate = localStorage.getItem('dailyVideoDate'); // Check if there is a cached date in localStorage

        if (cachedVideo &&  cachedDate === today) { 
            setTimeout(() => {
            setVideo(JSON.parse(cachedVideo));  // If there is a cached video and the cached date matches today's date, use the cached video
            setLoading(false); // Set loading to false since we have the video ready to display
            }, 0);
            return;
        }

        fetch('http://localhost:8000/video-of-the-day')
            .then(response => { // Fetch the video of the day from the backend
                if (!response.ok) { // If the response is not OK, throw an error to be caught in the catch block
                    throw new Error('Failed to fetch video');
                }
                return response.json(); // Parse the response as JSON to get the video data
            })
            .then(data => { //
                setVideo(data); // Set the video state to the fetched video data
                setLoading(false);
                localStorage.setItem('dailyVideo', JSON.stringify(data)); // Cache the video data in localStorage for future use
                localStorage.setItem('dailyVideoDate', today); // Cache the date in localStorage to ensure we only use the cached video for the current day
            })
            .catch(err => {
                console.log('fetch error:', err.message); // add this
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading today's video...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!video) return null;

    const videoId = video.snippet.resourceId.videoId;
    const title = video.snippet.title;

    return (
        <div>
            <h2>VIDEO OF THE DAY</h2>
            <h3>{title}</h3>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}
