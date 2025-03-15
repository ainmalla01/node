import { createServer } from 'http';
import { readFile } from 'fs';
import { extname as _extname } from 'path';

// Create the server
const server = createServer((req, res) => {
    // Set the default file to serve
    let filePath = './index.html';

    // Check the request URL and set the file path accordingly
    if (req.url === '/') {
        filePath = './index.html';
    } else if (req.url === '/about') {
        filePath = './about.html';
    } else {
        // If the route is not found, serve a 404 page
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        return;
    }

    // Get the file extension
    const extname = _extname(filePath);
    let contentType = 'text/html';

    // Set the content type based on the file extension
    switch (extname) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'application/octet-stream';
    }

    // Read the file and respond
    readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Error: ' + err.code + ' ..\n');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Define the port and start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});