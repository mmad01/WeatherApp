import React from "react";

function Activities() {
  return (
    <div className="absolute top-90 left-45">
      <img
        src="/icons/heart.svg"
        alt="heart"
        className="w-[40px] h-[40px] absolute left-[35px] top-[20px]"
      />
      <h2 className="absolute left-[90px] top-[26px] font-extrabold text-2xl">
        Activities in your area
      </h2>

      <div className="bg-[#DEAB4D] rounded-[40px] w-342 h-[244px] flex justify-center items-center">
        <div className="relative top-10">
          <img
            src="/images/park.svg"
            alt="park"
            className="w-45 hover:w-65 cursor-pointer"
          />
          <h5 className="font-bold text-xl">2km away</h5>
        </div>

        <div className="ml-30 relative top-10">
          <img
            src="/images/park2.svg"
            alt="park2"
            className="w-45 hover:w-65 cursor-pointer"
          />
          <h5 className="font-bold text-xl">1.5km away</h5>
        </div>

        <div className="ml-30 relative top-10">
          <img
            src="/images/pool.svg"
            alt="pool"
            className="w-45 hover:w-65 cursor-pointer"
          />
          <h5 className="font-bold text-xl">3km away</h5>
        </div>

        <div className="ml-30 relative top-10">
          <img
            src="/images/beach.svg"
            alt="beach"
            className="w-45 hover:w-65 cursor-pointer"
          />
          <h5 className="font-bold text-xl">500m away</h5>
        </div>
      </div>
    </div>
  );
}

export default Activities;
