import React from 'react'

function EverDayWeather() {
  return (
    <>
      <div className="absolute top-5 w-[290px] h-20 flex justify-center items-center">
        <div className="relative top-2 opacity-[60%] ml-3.5 mr-3.5 ">
          <h1 className="font-extrabold text-[14px]">FRI</h1>
          <img src="/icons/rainy.svg" alt="rainy" className="w-6 h-6" />
        </div>

        <div className="relative top-1 opacity-[80%] ml-3.5 mr-3.5 ">
          <h1 className="font-extrabold text-[16px]">SAT</h1>
          <img src="/icons/sunny.svg" alt="sunny" className="w-8 h-8" />
        </div>

        <div className=" ml-3.5 mr-3.5">
          <h1 className="font-extrabold text-lg">SUN</h1>
          <img src="/icons/Cloudy.svg" alt="Cloudy" className="w-10 h-10" />
        </div>

        <div className="relative top-1 opacity-[80%] ml-3.5 mr-3.5 ">
          <h1 className="font-extrabold text-[16px]">MON</h1>
          <img
            src="/icons/cloudrainy.svg"
            alt="cloudrainy"
            className="w-8 h-8"
          />
        </div>

        <div className="relative top-2 opacity-[60%] ml-3.5 mr-3.5 ">
          <h1 className="font-extrabold text-[14px]">TUES</h1>
          <img
            src="/icons/Thunder.svg"
            alt="Thunder"
            className="w-6 h-6 relative left-1.5"
          />
        </div>
      </div>
    </>
  );
}

export default EverDayWeather