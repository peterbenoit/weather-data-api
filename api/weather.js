const fetch = require('node-fetch');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { lat, lon, type = 'weather', q } = req.query;

    const apiKey = process.env.OPENWEATHER_API_KEY;

    if ((!lat || !lon) && !q) {
        return res
            .status(400)
            .json({ error: 'Please provide either lat and lon parameters, or a q parameter' });
    }

    let weatherUrl;

    if (q) {
        if (type === 'forecast') {
            weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=imperial&appid=${apiKey}`;
        } else {
            weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=imperial&appid=${apiKey}`;
        }
    } else {
        if (type === 'forecast') {
            weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
        } else {
            weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
        }
    }

    console.log(weatherUrl);

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        if (response.ok) {
            res.status(200).json(data);
        } else {
            res.status(500).json({ error: 'Error fetching weather data', details: data });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
};
