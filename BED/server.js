var express = require('express');
var app = express();
const cors = require('cors');
app.options('*', cors()); //enter cors codes
app.use(cors());
const port = 3000;

// Serve the HTML file
app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.status(404).send('404 Not Found');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.send(data);
        }
    });
});

let visitorCount = 0;

// Increment visitor count and return as JSON
app.get('/count', (req, res) => {
    visitorCount++;
    res.json({ count: visitorCount });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});