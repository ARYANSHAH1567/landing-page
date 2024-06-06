
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import  Navbar  from "@/components/ui/floating-navbar";

import "./globals.css";
import StickyScrollSection from "@/components/Scrollbar";
import { InfiniteMovingCardsDemo } from "@/components/Images";
import Review from "@/components/Review";
import Target from "@/components/Target";
import { CarouselDemo } from "@/components/cta";

export default function Home() {
  return (
    <main className="relative flex bg-[white] justify-center items-center flex-col  mx-auto sm:px=10  overflow-clip">
       <Navbar />
      <div className="w-full rotated-border-div border-1 bg-[white] border-black hero border-solid rounded-bl-[15%] rounded-br-[25%] bg-black-100 hero-sec">
        <Hero />
      </div>
      {/* <div className="w-full"> */}
      <RecentProjects />
      <StickyScrollSection />
      <InfiniteMovingCardsDemo />
      <Review />
      <h6 className="h3 text-center text-black text-[40px] leading-[40px] py-20">
        <strong>Things your spreadsheet wishes it could do</strong>
      </h6>
      <Target />
      <button className="p-[3px] relative">
        <div className="absolute inset-0  " />
        <div className="px-8 py-2 bg-white magBtn relative group transition text-[#5518AB] duration-200 hover:text-[#fff] ">
          View All Features
        </div>
      </button>
      <div className="bg-[#F2F2F2] w-full mt-32 ">
        <div>
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d12c8ea3f15_slider-bg.svg"
            alt=""
            className="absolute z-50"
            height={828}
          />
        </div>
        <div>
          <h2 className="items-center text-center pt-12 text-[38px] leading-[48px] font-semibold text-black">
            Get Crest and get...{" "}
          </h2>
          <CarouselDemo />
        </div>
      
      <Footer/>
      </div>
    </main>
  );
}
