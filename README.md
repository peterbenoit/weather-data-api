# Weather API Proxy

This repository provides a Node.js-based proxy for the OpenWeather API. It allows you to fetch current weather or forecast data by providing either latitude and longitude coordinates or a city name as a query parameter. The proxy adds CORS headers and handles requests to both the current weather and forecast endpoints of the OpenWeather API.

## Features

-   Supports querying weather data using either:
    -   Latitude and longitude (`lat` and `lon`)
    -   City name (`q`)
-   Fetches both current weather and forecast data based on the `type` query parameter (`weather` by default, `forecast` for 5-day forecast).
-   Adds CORS headers to allow cross-origin requests.
-   Handles errors and provides clear error messages for invalid inputs or API issues.

## Requirements

-   Node.js (>=14.x)
-   OpenWeather API key

## Environment Variables

-   `OPENWEATHER_API_KEY`: Your OpenWeather API key, required to access the weather data.

## Installation

### 1. Download or Clone the Repository

You can download this repository as a ZIP file, or clone it using Git:

**Download as ZIP:**

-   [Download ZIP](https://github.com/your-username/weather-api-proxy/archive/refs/heads/main.zip)

**Clone the repository:**

```bash
git clone https://github.com/your-username/weather-api-proxy.git
cd weather-api-proxy
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the project root and add your OpenWeather API key:

```
OPENWEATHER_API_KEY=your_api_key_here
```

### 4. Start the server:

```bash
npm start
```

## Usage

Once the server is running, you can make GET requests to the proxy endpoint.

### Query Parameters

-   `lat`: Latitude coordinate for weather data.
-   `lon`: Longitude coordinate for weather data.
-   `q`: City name for weather data.
-   `type`: Type of data to fetch (`weather` or `forecast`).

## Example Request

```
GET /api/weather?lat=35&lon=139&type=forecast
```

## License

This project is licensed under the MIT License.
