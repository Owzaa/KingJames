const express = require('express');
const app = express();
const axios = require('axios');

app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws'); // Cases API endpoint
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));