import { useState } from "react";

export const Home = () => {
  const [input, setInput] = useState(0);

  return (
    <>
      <div className="w-full h-screen text-white bg-gray-900 flex justify-center">
        <div className="w-[80%] h-[70%] mt-[10px] p-3 flex flex-col items-center justify-center border-2 border-amber-50 bg-white/5 backdrop-blur-2xl rounded-2xl space-y-3">
          <p className="">Italiy, it</p>
          <img
            src="logo.webp"
            alt="WeatherPhoto"
            className="size-24"
            srcSet=""
          />
          <h1 className="">29c</h1>
          <p className="">MSG</p>
          <div className="w-full flex justify-around">
            <p className="">11km</p>
            <p className="">02%</p>
            <p className="">8hr</p>
          </div>
          <div className="w-full flex justify-center space-x-6">
            <input
              type="text"
              className="w-[60%] p-3 bg-amber-50 text-black rounded-2xl"
              placeholder="Enter City..."
            />
            <button className="p-3 rounded-2xl bg-gray-800 text-accent">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
