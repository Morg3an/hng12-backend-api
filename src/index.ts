// Import required modules
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Define the API route
app.get('/', (req, res) => {
  res.json({
    email: process.env.HNG_EMAIL || 'mulweyemorgan12@gmail.com',
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/Morg3an/hng12-backend-api'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
