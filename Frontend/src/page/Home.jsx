import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [search, setSearch] = useState("itali");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const res = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=83df8b5eea1f607c363ec00812d44b7e`
    ).then((response) => setWeather(response.data));
  }, [search]);

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <>
      <div className="w-full h-screen text-white bg-gray-900 flex justify-center">
        <div className="w-[80%] h-[70%] mt-[10px] p-3 flex flex-col items-center justify-center border-2 border-amber-50 bg-white/5 backdrop-blur-2xl rounded-2xl space-y-3">
          <p className="">
            {weather?.name}, {weather?.country}
          </p>
          <img
            src="logo.webp"
            alt="WeatherPhoto"
            className="size-24"
            srcSet=""
          />
          <h1 className="">{weather?.main?.temp}°F</h1>
          <p className=""></p>
          <div className="w-full flex justify-around">
            <p className="">{weather?.wind?.speed}km</p>
            <p className="">{weather?.main?.humidity}%</p>
            <p className="">8hr</p>
          </div>
          <div className="w-full flex justify-center space-x-6">
            <form action="" onSubmit={handleSearch}>
              <input
                type="text"
                value={search}
                className="w-[60%] p-3 bg-amber-50 text-black rounded-2xl"
                placeholder="Enter City..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="p-3 rounded-2xl bg-gray-800 text-accent"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
