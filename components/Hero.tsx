import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="pb-20 pt-25  relative  hero">
      <div className="flex justify-center relative my-20 z-10">
        <div className=" relative w-full md:max-w-2xl lg:max-w-[100vw] flex flex-row justify-around">
          <div className="flex flex-col mx-20 mt-8">
            <h1 className="block h1 text-[60px] md:text-5xl lg:text-6xl font-semibold">
              Every order
              <br />
              fulfilled,{" "}
              <span className="text-style-gradient text-[60px] md:text-5xl lg:text-6xl font-semibold">
                on time.
              </span>
            </h1>
            <br />
            <br />
            <p className="text-[18px] bottom-[10px] top-[30px] max-w-[1350px]">
              Eliminate overstocking and under-stocking with Crest. Built by
              supply-chain experts, it brings the same technology used by large
              global brands to power fast-growing startups. In short, we make
              supply meet demand, and then help you grow both.
            </p>
            <br></br>
            <div className="flex flex-row ">
              <div className="mt-[45px] left-1">
                {/* <MagicButton title={"Get Started with Crest"} />{" "} */}
                <a
                  href="#"
                  fs-modal-element="open"
                  tabIndex={0}
                  data-w-id="74b8b29d-8a50-b7be-9bd2-3fa4b25106c3"
                  className="btn-secondory b-dark w-55 h-12 text-center justify-center flex py-3 px-5"
                  id="mDlWBlLhlQmBmuI4::4v_Xa"
                  role="button"
                  aria-controls="pIozpJRg0gvjkNM4vcfUZ"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-roledescription="open-modal-trigger"
                >
                  Get started with Crest
                </a>
              </div>
              <img
                src="/hero-button.svg"
                className="relative hero-button-img left-5 top-15"
                height={80}
                width={191}
              />
            </div>
          </div>

          <img
            src="/hero.svg"
            className="relative hero-img left-0 right-0 top-0 z-50"
            width="530"
            height="510"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
