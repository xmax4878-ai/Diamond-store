// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// API endpoint for purchasing diamonds
app.post('/api/buy-diamond', (req, res) => {
    const { userId, serverId, packageId } = req.body;

    // Check if the required data is present
    if (!userId || !serverId || !packageId) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('Received purchase request:');
    console.log(`User ID: ${userId}`);
    console.log(`Server ID: ${serverId}`);
    console.log(`Package ID: ${packageId}`);

    // For now, we just send a success response
    res.status(200).json({ message: 'Purchase request received successfully.', success: true });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
