import React from "react";
import { Navbar } from "../modules/navbar/navbar";
import { TopSection } from "../modules/top-section/top-section";
import { SwiperMain } from "../components/swiper/swiper";
import { AutomationProcesses } from "../modules/automation-processes/automation-processes";
import { OurProcess } from "../modules/our-process/our-process";
import { ReadyMadeSolutions } from "../modules/ready-made-solutions/ready-made-solutions";

export const HomePage: React.FC = () => {
  return (
    <div className="font-sans font-medium text-dark_font bg-main_background px-5 md:px-9 py-6 ">
      {/* <Navbar></Navbar> */}
      <div className="max-w-1368 p-0 md:px-11 m-auto">
        <TopSection></TopSection>
        <AutomationProcesses></AutomationProcesses>
        <OurProcess></OurProcess>
        <ReadyMadeSolutions></ReadyMadeSolutions>
      </div>
    </div>
  );
};
