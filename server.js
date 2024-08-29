import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

// Use import.meta.url to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors());
app.use(express.static(join(__dirname, 'public')));

// Proxy route to fetch RSS feed
app.get('/proxy', async (req, res) => {
    try {
        const response = await fetch('https://lexidugo.substack.com/feed');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        res.header('Content-Type', 'application/rss+xml');
        res.send(data);
    } catch (error) {
        console.error('Error fetching the RSS feed:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
