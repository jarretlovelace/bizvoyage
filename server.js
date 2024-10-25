import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();

// Use CORS to handle cross-origin requests
app.use(cors());

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "dist" directory (where your frontend build will be)
app.use(express.static(path.join(__dirname, 'dist')));

// Example API endpoint for fetching travel data
app.get('/api/travel/fetch-travel-data', (req, res) => {
  res.json({
    destination: 'New York City',
    startDate: '2024-12-01',
    endDate: '2024-12-10',
    flight: true,
    hotel: true,
    carRental: false,
    price: 1200,
  });
});

// Catch-all route to serve index.html for any other routes (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Set up the server to listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
