import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3001;

// Resolve __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/proxy', async (req, res) => {
  try {
    const response = await fetch('https://lexidugo.substack.com/feed');
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching the RSS feed.');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
