#!/usr/bin/env node

import http from 'node:http';
import fs from 'node:fs/promises';

const routes = {
    '/': 'index.html',
    '/about': 'about.html',
    '/contact-me': 'contact-me.html',
};

const server = http.createServer(async (request, response) => {
    console.log(`request.url ${request.url}`);
    
    const filename = routes[request.url] || '404.html';
    
    try {
        const html = await fs.readFile(filename);
        
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(html);
    } catch (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('500 Server Error');
        console.error(err);
    }
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});
