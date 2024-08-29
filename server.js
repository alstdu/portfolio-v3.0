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

app.get('/images/:image', async (req, res) => {
    const imageUrl = `https://lexidugo.substack.com/p/${req.params.image}`;
    try {
      const response = await fetch(imageUrl);
      if (response.ok) {
        const buffer = await response.buffer();
        res.set('Content-Type', response.headers.get('content-type'));
        res.send(buffer);
      } else {
        console.error(`Failed to fetch image: ${response.statusText}`);
        res.status(500).send('Error fetching the image.');
      }
    } catch (error) {
      console.error('Error fetching the image:', error);
      res.status(500).send('Error fetching the image.');
    }
  });
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
