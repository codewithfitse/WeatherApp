# WeatherApp

# ⛅ WeatherApp

> Real-time weather updates, dynamic visuals, and clean UI – built with React + OpenWeatherMap.

![Preview](./public/LandingBg.png)

---

## 🌦 About

**WeatherApp** is a modern weather dashboard that fetches real-time weather data based on user input and visually represents the conditions using beautiful background images and animated icons.

Made with ❤️ by [@codewithfitse](https://github.com/codewithfitse)

---

## 🔥 Features

- 🌍 Search weather by **city name**
- 🌤️ **Dynamic background** changes by weather condition
- 🌡️ Displays:
  - Temperature
  - Weather status (Rain, Clouds, etc.)
  - Wind speed
  - Humidity
- 🎨 Custom SVG **icons for each weather condition**
- 🧠 **React Hooks** powered (`useState`, `useEffect`)
- 🚀 Responsive and clean layout
- 🛠️ Built using **Vite** for ultra-fast dev experience

---

## 📸 Screenshots

> Here's how it looks:

| Sunny             | Rainy             | Cloudy             |
|------------------|------------------|-------------------|
| ![](./public/sunny.png) | ![](./public/rainy.png) | ![](./public/cloudy.png) |

---

## ⚙️ Tech Stack

| Tech        | Description              |
|-------------|--------------------------|
| React       | Frontend framework       |
| Axios       | For API requests         |
| Vite        | Lightning-fast dev tool |
| Tailwind CSS| Styling framework        |
| OpenWeatherMap API | Weather data provider |

---

## 🧪 Getting Started

Clone the repo:

```bash
git clone https://github.com/codewithfitse/WeatherApp.git
cd WeatherApp
Install dependencies:

bash
Copy
Edit
npm install
🔑 Set up Environment Variables
Create a .env file in the root directory:

ini
Copy
Edit
VITE_WEATHER_API=your_api_key_here
🔐 You can get a free API key from https://openweathermap.org/api

Then run the app:

bash
Copy
Edit
npm run dev
Boom 💥 it's live on http://localhost:5173

🧠 Logic Breakdown
User enters a city → hits submit

App fetches data using Axios from OpenWeatherMap API

Weather data is stored in state

Based on weather.main, background class changes dynamically

Custom SVG icons rendered based on condition

📁 Folder Structure
bash
Copy
Edit
src/
├── assets/            # Image assets
├── components/        # Weather SVG components
│   ├── Windy.jsx
│   ├── SunnyIcon.jsx
│   └── ...
├── pages/
│   └── Home.jsx       # Main component
├── App.jsx
└── main.jsx
✨ Future Features (TODO)
 🌎 Auto-detect user location (Geolocation API)

 📈 Add 5-day forecast view

 🎨 Dark mode toggle

 🌐 Multi-language support

 💾 Save recent searches

🙌 Author
Fitsum Zerhun

GitHub: @codewithfitse

Twitter: @codewithfitse

Portfolio: Coming soon 😉

⭐ Support
If you like this project, leave a ⭐ on the repo.
Pull requests, issues, and feedback are always welcome!

📜 License
This project is licensed under the MIT License.

☁️ Powered By
OpenWeatherMap API

Vite

Tailwind CSS
