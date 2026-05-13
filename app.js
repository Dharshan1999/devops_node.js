const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// FIX: important for Docker
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
