# Analytics Dashboard

A full-stack analytics dashboard displaying GitHub repository statistics and YouTube channel analytics, built with React (TypeScript) and Express.js.

## Features

- **GitHub Analytics**
  - Repository statistics (stars, forks)
  - Language distribution pie chart
  - Repository activity bar chart
- **YouTube Analytics**
  - Subscriber count
  - Total view count
  - Channel statistics overview
- **Data Visualization**
  - Interactive charts using Recharts
  - Responsive design for all screen sizes
- **Backend API**
  - Secure API endpoints
  - GitHub/YouTube API integration
  - CORS-enabled Express server

## Technologies Used

**Frontend**

- React 18
- TypeScript
- Recharts (data visualization)
- Axios (HTTP client)
- CSS-in-JS (inline styling)

**Backend**

- Express.js
- CORS middleware
- Axios
- Dotenv (environment variables)

## Prerequisites

- Node.js (v16.x or later)
- npm (v8.x or later)
- GitHub Account (for API access)
- YouTube API Key

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/analytics-dashboard.git
cd analytics-dashboard
```

2. Backend Setup

```bash
cd server
npm install

Create .env file:

PORT=5000
YOUTUBE_API_KEY=your_youtube_api_key
```

3. Frontend Setup

```bash
cd ../client
npm install

Create .env file:

REACT_APP_API_URL=http://localhost:5000
```

Running the Application
Start Backend Server

bash
Copy
cd server
npm run start
Start Frontend Development Server

bash
Copy
cd client
npm start
The dashboard will open at http://localhost:3000

Configuration
API Endpoints
Endpoint Method Description
/api/github?username={username} GET Get GitHub repository data
/api/youtube?channelId={channelId} GET Get YouTube channel statistics
Environment Variables
Server (.env)

PORT: Server port (default: 5000)

YOUTUBE_API_KEY: YouTube Data API v3 key

Client (.env)

REACT_APP_API_URL: Backend server URL

Project Structure
Copy
analytics-dashboard/
├── client/ # React Frontend
│ ├── public/
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── App.tsx # Main component
│ │ └── index.tsx # Entry point
│ ├── tsconfig.json # TypeScript config
│ └── package.json
│
└── server/ # Express Backend
├── src/
│ └── index.ts # Server entry point
├── tsconfig.json # TypeScript config
└── package.json
Contributing
Fork the repository

Create your feature branch:

bash
Copy
git checkout -b feature/new-feature
Commit changes:

bash
Copy
git commit -m 'Add some feature'
Push to the branch:

bash
Copy
git push origin feature/new-feature
Open a Pull Request

License
This project is licensed under the MIT License - see LICENSE file for details.

Acknowledgments
Create React App for project scaffolding

Recharts for data visualization components

Express.js team for backend framework
