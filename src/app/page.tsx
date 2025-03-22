import Image from "next/image";
import Header from "./components/header/Header";
import LeftBar from "./components/leftBar/LeftBar";
import Activities from "./components/activities/Activities";
import Forecast from "./components/forecast/Forecast";
import Details from "./components/details/Details";

export default function Home() {
  return (
    <div className="w-full h-screen relative ">
      <Header />
      <LeftBar />
      <Activities />
      <Forecast />
      <Details />
    </div>
  );
}
