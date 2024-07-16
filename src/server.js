const express = require('express');
const fs = require('fs');
const gTTS = require('gtts');

const app = express();
const port = 3001;

app.use(express.json());

app.post('/convert', (req, res) => {
    const text = req.body.text;
    const gtts = new gTTS(text, 'en');
    const filePath = './output.mp3';

    gtts.save(filePath, (err, result) => {
        if (err) {
            return res.status(500).send('Error converting text to speech');
        }
        res.sendFile(filePath, { root: __dirname });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
