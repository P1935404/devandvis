var express = require('express');
var app = express();
const fs = require('fs');
const cors = require('cors');
app.options('*', cors()); //enter cors codes
app.use(cors());
const port = 3000;

// File to store and manage visitor count
const counterFile = 'visitor_count.txt';
// Function to increment and get the visitor count
function cnt(counterFile) {
    let count = 1;
    if (fs.existsSync(counterFile)) {
        count = parseInt(fs.readFileSync(counterFile, 'utf8')) + 1;
    }
    fs.writeFileSync(counterFile, count.toString());
    return count;
}

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

// Increment visitor count and return as JSON
app.get('/count', (req, res) => {
    const visitorCount = cnt(counterFile);
    res.json({ count: visitorCount });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});