"use client";

import React from "react";
import './Images.css';

const testimonials = [
  { imgSrc: "/icon1.svg" },
  { imgSrc: "/icon3.svg" },
  { imgSrc: "/icon4.svg" },
  { imgSrc: "/icon5.svg" },
  { imgSrc: "/icon6.svg" },
  { imgSrc: "/icon7.svg" },
  { imgSrc: "/icon8.svg" },
  { imgSrc: "/icon9.svg" },
  { imgSrc: "/icon10.svg" },
  { imgSrc: "/icon11.svg" },
  { imgSrc: "/icon12.svg" },
  { imgSrc: "/icon13.svg" },
  { imgSrc: "/icon14.svg" },
  { imgSrc: "/icon15.svg" },
  { imgSrc: "/icon16.svg" },
  { imgSrc: "/icon17.svg" },
  { imgSrc: "/icon18.svg" },
  { imgSrc: "/icon19.svg" },
  { imgSrc: "/icon20.svg" },
  { imgSrc: "/icon21.svg" },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="slider-container h-[10rem] mb-16 rounded-md flex flex-col antialiased bg-white items-center justify-center relative">
      <div className="slider-wrapper flex items-center justify-center">
        <div className="slider-content flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.imgSrc}
              alt={`icon${index + 1}`}
              className="slider-img"
            />
          ))}
          {testimonials.map((testimonial, index) => (
            <img
              key={index + testimonials.length}
              src={testimonial.imgSrc}
              alt={`icon${index + 1}`}
              className="slider-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
