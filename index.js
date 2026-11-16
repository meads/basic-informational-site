#!/usr/bin/env node

import path from 'path';
import express from 'express';

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, 'public', 'index.html'));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, 'public', 'about.html'));
});

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, 'public', 'contact-me.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(import.meta.dirname, 'public', '404.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Basic informational site server listening on port ${PORT}`);
});
