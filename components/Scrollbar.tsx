"use client";

import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const StickyScrollSection: React.FC = () => {
  const targetElement1 = useRef<HTMLSpanElement>(null);
  const targetElement2 = useRef<HTMLSpanElement>(null);
  const targetElement3 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const animateCount = (element: HTMLSpanElement, endValue: number, duration: number) => {
      if (element) {
        const numAnim = new CountUp(element, endValue, { duration });
        if (!numAnim.error) {
          numAnim.start();
        } else {
          console.error(numAnim.error);
        }
      }
    };

    const createObserver = (element: HTMLSpanElement, endValue: number, duration: number) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(element, endValue, duration);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(element);
    };

    if (targetElement1.current) {
      createObserver(targetElement1.current, 85, 0.7);
    }

    if (targetElement2.current) {
      createObserver(targetElement2.current, 25, 0.5);
    }

    if (targetElement3.current) {
      createObserver(targetElement3.current, 15, 0.3);
    }
  }, []);

  return (
    <div className="sticky-scroll-section bg-[#151218] w-full h-[2000px] flex flex-row">
      <div className="container sticky">
        <div className="sss-wrapper padding-top-bottom-120">
          <div className="ss-3block-wrapper-new items-center flex flex-col">
            {/* Add other contents here if necessary */}
          </div>
        </div>
        <div id="scroll-to-stockouts" className="scroll-to stockouts">
          <div id="ss-card-1" className="ss-card-block-new _1 items-center justify-center mt-[270px]">
            <div className="ss-slide-content-new">
              <div className="ss-content-box-new">
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <span ref={targetElement1} className="text-style-gradient" style={{ fontSize: 150, fontWeight: 700 }}>
                      85
                    </span>
                    <span className="text-10xl font-weight-700" style={{ fontSize: 50 }}>
                      %
                    </span>
                  </div>
                  <div className="h4" style={{ fontSize: 30 }}>
                    Reduction in out-of-stock
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="scroll-to-recovery" className="scroll-to recovery">
          <div id="ss-card-2" className="ss-card-block-new _2 items-center justify-center mt-[400px]">
            <div className="ss-slide-content-new">
              <div className="ss-content-box-new">
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <span ref={targetElement2} className="text-10xl font-weight-700 text-style-gradient" style={{ fontSize: 150, fontWeight: 700 }}>
                      25
                    </span>
                    <span className="text-10xl font-weight-700" style={{ fontSize: 50 }}>
                      Days
                    </span>
                  </div>
                  <div className="h4" style={{ fontSize: 30 }}>
                    Reduction in cash recovery time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="scroll-to-revenue" className="scroll-to revenue mt-[70px]">
          <div id="ss-card-3" className="ss-card-block-new _3 items-center justify-center mt-[400px]">
            <div className="ss-slide-content-new">
              <div className="ss-content-box-new">
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <span ref={targetElement3} className="text-10xl font-weight-700 text-style-gradient" style={{ fontSize: 150, fontWeight: 700 }}>
                      15
                    </span>
                    <span className="text-10xl font-weight-700" style={{ fontSize: 50, fontWeight: 700 }}>
                      %
                    </span>
                  </div>
                  <div className="h4" style={{ fontSize: 30 }}>
                    Growth in revenue
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScrollSection;
