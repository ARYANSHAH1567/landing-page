
"use client";
import { HoverEffect } from "./ui/Card-hover-effect";



const RecentProjects = () => {

  const projects = [
    {
      title: "What to order",
      description:
        "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
        imgSrc: "/I1.svg",
    },
    {
      title: "When to order",
      description:
        "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.",
        imgSrc: "/I2.svg",
    },
    {
      title: "How much to stock",
      description:
        "Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.",
        imgSrc: "/I3.svg",
    },
    {
      title: "Where to place",
      description:
        "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.",
      imgSrc: "/I4.svg",
    },
  ];



  return (
    <div className="py-32" id="projects">
      <h1 className="heading text-black items-center text-center font-bold text-[38px] leading-[40px]">
     <b> Four key questions answered by Crest </b>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 left-5">
        <HoverEffect items={projects} />
       </div>
    </div>
  );
};

export default RecentProjects;
