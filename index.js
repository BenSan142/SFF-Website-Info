import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 8000;

const app = express();  // creates an instance of express, which is a web framework for Node.js


// only allow requests from the frontend (which is running on localhost:5173) to access this backend server
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend's URL
}));

// in-memory cache to store the video of the day and the date it was last fetched
let cache = {
  video: null, // stores the video of the day
  date: null // stores the date when the video was last fetched
};

// route that frontend can call to get the video of the day
app.get ('/video-of-the-day', async (req, res) => {
    try {

        // Check if we have a cached video and if it's still valid (it's the same day)
        const checkToday = new Date().toDateString();
        if (cache.video && cache.date === checkToday) {
            console.log('Serving from cache');
            return res.json(cache.video);
        }


        // step 1: fetch the channel details to get the uploads playlist ID
        // We need to get the uploads playlist ID to fetch the videos from that playlist. The uploads playlist contains all the videos uploaded by the channel.
        console.log('Fetching new video of the day');
        const channelResponse = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${process.env.YOUTUBE_ID}&key=${process.env.YOUTUBE_API_KEY}`);
        const channelData = await channelResponse.json();
        console.log(channelData.items[0]);

        // drill into the response to get the uploads playlist ID. The uploads playlist ID is located in channelData.items[0].contentDetails.relatedPlaylists.uploads
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // step 2: fetch the videos from the uploads playlist
        // maxResults=50 means we want to fetch up to 50 videos from the playlist.
        const videosResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YOUTUBE_API_KEY}&playlistId=${uploadsPlaylistId}&part=snippet&maxResults=50`);
        
        const videosData = await videosResponse.json();
        const videos = videosData.items;

        // step 3: select a video based on the day of the year
        const today = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000); // Calculate the day of the year
        console.log('today index:', today);     // what number is today?
       
        // Use the modulo operator to select a video from the list based on the day of the year. This way, we will cycle through the videos in the playlist throughout the year.
        const videoOfTheDay = videos[today % videos.length]; // Select a video based on the day of the year
        console.log(videoOfTheDay.snippet.title);

        // Cache the video of the day and the date it was fetched
        cache.video = videoOfTheDay;
        cache.date = checkToday;

        // Return the video of the day as a JSON response to the frontend
        res.json(videoOfTheDay);

    } catch (error) {

        // If there is an error during the fetch process, log the error and return a 500 Internal Server Error response to the frontend
        console.error('Error fetching video of the day:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});