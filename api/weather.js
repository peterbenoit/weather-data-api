// /api/weather.js

const fetch = require('node-fetch'); // If using Node.js < 18

module.exports = async (req, res) => {
    // Add CORS headers to allow requests from all origins (for demo purposes, we allow '*')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // Allow only GET requests
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const { lat, lon, type = 'weather' } = req.query;

    // Replace with your OpenWeatherMap API key
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!lat || !lon) {
        return res.status(400).json({ error: 'Please provide lat and lon parameters' });
    }

    let weatherUrl;
    if (type === 'forecast') {
        // Fetch 5-day forecast data
        weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    } else {
        // Fetch current weather data
        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    }

    console.log(weatherUrl);

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        if (response.ok) {
            res.status(200).json(data); // Send the weather data
        } else {
            res.status(500).json({ error: 'Error fetching weather data', details: data });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
};
