"use client";
import React, { useEffect, useState } from "react";

const NAVBAR_CLASSES = {
  container: "container mx-auto flex items-center justify-between py-4",
  logo: "flex items-center space-x-4",
  link: "hover:text-zinc-400",
  button: "border border-white dark:border-zinc-800 text-white dark:text-zinc-200 py-2 px-4 rounded-full",
  talkToUsBtn: "bg-gradient-to-r from-pink-500 to-purple-500",
};

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Show the navbar when scrolling up
      if (currentScrollPos < prevScrollPos) {
        setVisible(true);
      } else if (currentScrollPos > 10) {
        setVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const talkToUsBtn = document.getElementById("talkToUsBtn");

    const handleMouseEnter = () => {
      talkToUsBtn && talkToUsBtn.classList.remove(
        "border",
        "dark:border-zinc-800",
        "text-black",
        "dark:text-zinc-200"
      );
      talkToUsBtn && talkToUsBtn.classList.add("bg-gradient-to-r", "from-pink-500", "to-purple-500");
    };
    
    const handleMouseLeave = () => {
      talkToUsBtn && talkToUsBtn.classList.remove("bg-gradient-to-r", "from-pink-500", "to-purple-500");
      talkToUsBtn && talkToUsBtn.classList.add(
        "border",
        "dark:border-zinc-800",
        "text-white",
        "dark:text-zinc-200"
      );
    };
    

    talkToUsBtn &&  talkToUsBtn.addEventListener("mouseenter", handleMouseEnter);
    talkToUsBtn && talkToUsBtn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      talkToUsBtn &&  talkToUsBtn.removeEventListener("mouseenter", handleMouseEnter);
      talkToUsBtn &&  talkToUsBtn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <nav
      className={`text-white fixed  w-full top-0 z-50 transition-transform duration-200  ${
        visible ? "transform w-nav navbar hide translate-y-0  bg-transparent bg-opacity-0 hero" : "transform -translate-y-full"
      }`}  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
    >
      <div className={NAVBAR_CLASSES.container}>
        <div className={NAVBAR_CLASSES.logo}>
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d8262cbfe9e806aca29403_Crest%20white%20font%20small.png"
            alt="Crest Logo"
            className="h-10 w-30"
          />
        </div>
        <div className="flex space-x-8">
          <a href="#" className={NAVBAR_CLASSES.link}>
            Product
          </a>
          <a href="#" className={NAVBAR_CLASSES.link}>
            Pricing
          </a>
          <a href="#" className={NAVBAR_CLASSES.link}>
            Industry
          </a>
          <a href="#" className={NAVBAR_CLASSES.link}>
            Customer Stories
          </a>
          <a href="#" className={NAVBAR_CLASSES.link}>
            About
          </a>
          <a href="#" className={NAVBAR_CLASSES.link}>
            Blog
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className={NAVBAR_CLASSES.link}>
            Login
          </a>
          <button id="talkToUsBtn" className="btn-secondory b-dark w-55 h-12 text-center justify-center flex py-3 px-5">
            Talk to Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

