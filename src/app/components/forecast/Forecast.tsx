import React from "react";

function Forecast() {
  return (
    <div className="absolute top-162 left-45  w-342 h-[244px] rounded-[40px] bg-[#DEAB4D]">
      <img
        src="/icons/clock.svg"
        alt="clock icon"
        className=" w-[30px] h-[30px] absolute left-[35px] top-[15px] "
      />
      <h2 className="absolute left-[80px] top-[16px] font-extrabold text-2xl">
        24-hour forecast
      </h2>
      <div className="relative flex justify-center items-center">
        <img
          src="/icons/Chart.svg"
          alt="chart line"
          className="w-342 h-50 absolute top-12"
        />

        <div className=" absolute left-5 top-18">
          <h4 className="font-extrabold text-xl absolute">26°</h4>
          <img
            src="/icons/Clear sky.svg"
            alt="Clear sky"
            className="relative top-15"
          />
          <h6 className="font-semibold absolute top-20 left-[-15px]">
            11.7km/h
          </h6>
          <h6 className="font-semibold absolute top-24">Now</h6>
        </div>

        <div className=" absolute left-54 top-23">
          <h4 className="font-extrabold text-xl absolute">26°</h4>
          <img
            src="/icons/night.svg"
            alt="night"
            className="relative top-15"
          />
          <h6 className="font-semibold absolute top-20 left-[-16px]">
            9.3km/h
          </h6>
          <h6 className="font-semibold absolute top-24 left-[-6]">22:00</h6>
        </div>

        <div className=" absolute left-103 top-36">
          <h4 className="font-extrabold text-xl absolute">22°</h4>
          <img
            src="/icons/Midnight thunderstorm.svg"
            alt="Midnight thunderstorm"
            className="relative top-11"
          />
          <h6 className="font-semibold absolute top-16 left-[-16px]">
            12km/h
          </h6>
          <h6 className="font-semibold absolute top-20 left-[-6]">00:00</h6>
        </div>

        <div className=" absolute left-152 top-32">
          <h4 className="font-extrabold text-xl absolute">16°</h4>
          <img
            src="/icons/Thunder.svg"
            alt="Thunder"
            className="relative top-12"
          />
          <h6 className="font-semibold absolute top-17 left-[-16px]">
            15km/h
          </h6>
          <h6 className="font-semibold absolute top-21 left-[-6]">2:00</h6>
        </div>

        <div className=" absolute left-201 top-33">
          <h4 className="font-extrabold text-xl absolute top-4">20°</h4>
          <img
            src="/icons/Thunder.svg"
            alt="Thunder"
            className="relative top-14"
          />
          <h6 className="font-semibold absolute top-19 left-[-16px]">
            15km/h
          </h6>
          <h6 className="font-semibold absolute top-23 left-[-6]">4:00</h6>
        </div>

        <div className=" absolute left-250 top-34">
          <h4 className="font-extrabold text-xl absolute">22°</h4>
          <img
            src="/icons/Midnight thunderstorm.svg"
            alt="Midnight thunderstorm"
            className="relative top-13"
          />
          <h6 className="font-semibold absolute top-18 left-[-16px]">
            15km/h
          </h6>
          <h6 className="font-semibold absolute top-22 left-[-6]">6:00</h6>
        </div>

        <div className=" absolute left-299 top-36">
          <h4 className="font-extrabold text-xl absolute">22°</h4>
          <img
            src="/icons/Thunder.svg"
            alt="Thunder"
            className="relative top-10"
          />
          <h6 className="font-semibold absolute top-14 left-[-16px]">
            15km/h
          </h6>
          <h6 className="font-semibold absolute top-18 left-[-6]">6:00</h6>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
