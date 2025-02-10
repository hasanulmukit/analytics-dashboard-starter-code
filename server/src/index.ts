import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// GitHub API Proxy
app.get('/api/github', async (req, res) => {
  try {
    const { username } = req.query;
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'GitHub API failed' });
  }
});

// YouTube API Proxy
app.get('/api/youtube', async (req, res) => {
  try {
    const { channelId } = req.query;
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${process.env.YOUTUBE_KEY}`
    );
    res.json(response.data.items[0].statistics);
  } catch (error) {
    res.status(500).json({ error: 'YouTube API failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});