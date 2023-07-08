const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
  const { artist, minDate, maxDate } = req.query;

  try {
    const response = await fetch(`https://concerts-artists-events-tracker.p.rapidapi.com/artist/past?name=${artist}&minDate=${minDate}&maxDate=${maxDate}`, {
      headers: {
        'X-Rapidapi-Key': '82525c6f6amsh187efe905130ca1p15c49bjsn2baa38854472',
        'X-Rapidapi-Host': 'concerts-artists-events-tracker.p.rapidapi.com',
        'Host': 'concerts-artists-events-tracker.p.rapidapi.com' 
      }
    });

    if (response.ok) {
      const data = await response.json();
      res.json(data);
      console.log(data);
    } else {
      throw new Error('Request failed');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred.' });
  }
});
