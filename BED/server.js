var express = require('express');
var app = express();
const cors = require('cors');
app.options('*', cors()); //enter cors codes
app.use(cors());
const port = 3000;

// Serve the HTML file
app.get('/', (req, res) => {
    res.status(200).send({"Results":"Success"});
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