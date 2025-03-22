import axios from "axios";
import React from "react";

export interface weatherApiType {
  location: Location;
  current: Current;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}




async function Header() {

const { data } = await axios<weatherApiType>(
  "https://api.weatherapi.com/v1/current.json?key=08bc9040d3ed405999e103406251903&q=mashhad&aqi=no"
);



  return (
    <>
      <img
        src={data.current.condition.icon}
        alt="Cloudy img"
        className="w-95 h-95 absolute left-380 top-10"
      />
      <div className="w-52 h-70 absolute left-20 top-13">
        <img
          src="/icons/location.svg"
          alt="loc"
          className="w-[30px] h-[30px] absolute left-5 top-1 "
        />

        <h3 className="w-[111px] h-[22px] absolute left-[65px] top-1 font-bold text-2xl cursor-pointer hover:bg-[#f7cd81]">
          {data.location.name}
        </h3>

        <img
          src="/icons/Right arrow.svg"
          alt="Right arrow"
          className="w-[21px] h-[30px] absolute left-[170px]"
        />

        <h1 className="w-[196px] h-[47px] absolute top-14 left-5 text-5xl font-bold">
          {data.current.condition.text}
        </h1>

        <h1 className="w-[196px] h-[47px] absolute top-45 left-5 text-7xl font-bold">
          {data.current.temp_c}°C
        </h1>

        <h4 className="font-extrabold absolute top-62 left-8 text-lg">
          {data.location.localtime}
        </h4>
      </div>
    </>
  );
}

export default Header;
