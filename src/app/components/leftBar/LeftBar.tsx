import React from "react";

function LeftBar() {
  return (
    <div
      className="bg-[#DEAB4D]
     w-[100px] h-[537px] absolute top-90 left-9 rounded-[40px] flex flex-col items-center"
    >
      <img
        src="/images/profile.jpg"
        alt="profile"
        className="w-[60px] h-[60px] rounded-full mt-4"
      />

      <div className="w-[85px] flex flex-col items-center mt-23 cursor-pointer rounded-[20px] hover:bg-[#e0be7f]">
        <img
          src="/icons/cloudrainy.svg"
          alt="rain icon"
          className=" w-[50px] h-[50px]"
        />
        <h5 className="font-bold">weather</h5>
      </div>

      <div className="w-[85px] flex flex-col items-center mt-5 cursor-pointer rounded-[20px] hover:bg-[#e0be7f]">
        <img
          src="/icons/explore.svg"
          alt="explore icon"
          className=" w-[50px] h-[50px] "
        />
        <h5 className="font-bold">explore</h5>
      </div>

      <div className="w-[85px] flex flex-col items-center mt-5 cursor-pointer rounded-[20px] hover:bg-[#e0be7f]">
        <img
          src="/icons/cities.svg"
          alt="cities icon"
          className=" w-[50px] h-[50px]"
        />
        <h5 className="font-bold">cities</h5>
      </div>

      <div className="w-[85px] flex flex-col items-center mt-5 cursor-pointer rounded-[20px] hover:bg-[#e0be7f]">
        <img
          src="/icons/setting.svg"
          alt="setting icon"
          className=" w-[50px] h-[50px]"
        />{" "}
        <h5 className="font-bold">setting</h5>
      </div>
    </div>
  );
}

export default LeftBar;
