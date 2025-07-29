import { useState } from "react";

export const Home = () => {
  const [input, setInput] = useState(0);

  return (
    <>
      <div className="w-full h-screen bg-gray-900 flex justify-center items-center">
        <div className="w-[80%] h-[70%] p-3 flex flex-col items-center justify-center border-2 border-amber-50 bg-white/5 backdrop-blur-2xl rounded-2xl">
          <p className="">Italiy</p>
          <h1 className="">Italiy</h1>
          <img src="size-24" alt="WeatherPhoto" srcSet="" />
          <h1 className="">29c</h1>
          <p className="">MSG</p>
          <div className="flex justify-between">
            <p className="">11km</p>
            <p className="">02%</p>
            <p className="">8hr</p>
          </div>
        </div>
      </div>
    </>
  );
};
