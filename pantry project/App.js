const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Replace with the base URL of your pantry API.
const PANTRY_API_BASE_URL = 'https://getpantry.cloud/apiv1/pantry/819fd601-9017-4a97-bfde-a5e3b3803ba2';

// Middleware for parsing JSON requests.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to get all items from the pantry API.
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://getpantry.cloud/apiv1/pantry/819fd601-9017-4a97-bfde-a5e3b3803ba2');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to get a specific item by ID.
app.get('/basket/:basket_key', async (req, res) => {
    const itemId = req.params.item_id;
    try {
        const response = await axios.get(`https://getpantry.cloud/apiv1/pantry/819fd601-9017-4a97-bfde-a5e3b3803ba2/${itemId}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to create a new item.
app.post('/basket/:basket_key', async (req, res) => {
    const data = req.body;
    try {
        const response = await axios.post(`https://getpantry.cloud/apiv1/pantry/819fd601-9017-4a97-bfde-a5e3b3803ba2/basket/${basket_key}`);
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to update an item by ID.
app.put('/items/:item_id', async (req, res) => {
    const itemId = req.params.item_id;
    const data = req.body;
    try {
        const response = await axios.put(`https://getpantry.cloud/apiv1/pantry/819fd601-9017-4a97-bfde-a5e3b3803ba2/basket/${basket_key}`);
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to delete an item by ID.
app.delete('/items/:item_id', async (req, res) => {
    const itemId = req.params.item_id;
    try {
        const response = await axios.delete(`https://getpantry.cloud/apiv1/pantry/819fd601-9017-4a97-bfde-a5e3b3803ba2/basket/${basket_key}`);
        res.status(response.status).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
