import React from 'react'; 
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SimpleChart } from './SimpleChart';

interface GitHubRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
}

interface YouTubeStats {
  subscriberCount: string;
  viewCount: string;
}

export const Dashboard = () => {
  const [githubData, setGithubData] = useState<GitHubRepo[]>([]);
  const [youtubeData, setYoutubeData] = useState<YouTubeStats | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const githubRes = await axios.get('http://localhost:5000/api/github?username=Your USER NAME');
        setGithubData(githubRes.data);
        
        const youtubeRes = await axios.get('http://localhost:5000/api/youtube?channelId=YOUR USER ID');
        setYoutubeData(youtubeRes.data);
      } catch (error) {
        console.error('Data fetch failed:', error);
      }
    };
    
    fetchData();
  }, []);

  const chartData = githubData.map(repo => ({
    name: repo.name,
    stars: repo.stargazers_count,
    forks: repo.forks_count
  }));

  return (
    <div style={{ padding: 20, maxWidth: 1200, margin: '0 auto' }}>
      <h1>GitHub Repositories</h1>
      <SimpleChart data={chartData} />
      
      {youtubeData && (
        <div style={{ marginTop: 40 }}>
          <h2>YouTube Stats</h2>
          <div style={{ display: 'flex', gap: 20 }}>
            <div>
              <h3>Subscribers</h3>
              <p style={{ fontSize: 24 }}>{parseInt(youtubeData.subscriberCount).toLocaleString()}</p>
            </div>
            <div>
              <h3>Views</h3>
              <p style={{ fontSize: 24 }}>{parseInt(youtubeData.viewCount).toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};