import React from "react";
import EverDayWeather from "../EverDayWeather/EverDayWeather";
import axios from "axios";

async function Details() {

const { data } = await axios(
  "https://api.weatherapi.com/v1/current.json?key=08bc9040d3ed405999e103406251903&q=Mashhad&aqi=no"
);

const time: string = data.location.localtime.split(" ")[1];

  return (
    <div className="bg-[#DEAB4D] rounded-[40px] absolute top-90 left-398 w-[290px] h-[537px]">
      <EverDayWeather />

      <div className="h-6 w-45 absolute top-25 left-13">
        <img src="/icons/clock.svg" alt="clock" className="w-6 h-6" />
        <h5 className="font-bold text-2xl relative left-8 bottom-7">
          {time}PM GMT
        </h5>
      </div>

      <div className="absolute w-[290px] h-99 top-34">
        <h2 className="font-extrabold ml-3 text-xl">AIR CONDITIONS</h2>
        <div className="flex flex-col items-start ml-2 absolute top-15 w-[270px] h-70">
          <div className=" relative">
            <img
              src="/icons/Temperature.svg"
              alt="Temperature"
              className="w-6"
            />
            <h3 className="font-bold relative left-9 bottom-8 text-lg">
              Real Feel
            </h3>
            <h2 className="relative font-bold text-xl bottom-9 left-9">
              {data.current.feelslike_c}
            </h2>
          </div>

          <div className=" relative">
            <img src="/icons/wind.svg" alt="wind" className="w-8" />
            <h3 className="font-bold relative left-9 bottom-8 text-lg">Wind</h3>
            <h2 className="relative font-bold text-xl bottom-9 left-9">
              {data.current.wind_mph}
            </h2>
          </div>

          <div className=" relative">
            <img src="/icons/Water-drop.svg" alt="Water-drop" className="w-7" />
            <h3 className="font-bold relative left-9 bottom-8 text-lg">
              Chance of rain
            </h3>
            <h2 className="relative font-bold text-xl bottom-9 left-9">
              %{data.current.precip_mm}
            </h2>
          </div>

          <div className="h-13 relative">
            <img src="/icons/sun.svg" alt="sun" className="w-9" />
            <h3 className="font-bold relative left-9 bottom-8 text-lg">
              UV Index
            </h3>
            <h2 className="relative font-bold text-xl bottom-9 left-9">
              {data.current.uv}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
