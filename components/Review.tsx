"use client"
import React, { useState, useEffect } from "react";
import "./Review.css";

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      content: (
        <>
          <div className="s-hp-slider-wrapper">
            <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c1068-65e70399" className="hp-slider-block">
              <div className="hp-slider-client-block">
                <div className="client-testimonial-wrapper">
                  <p className="text-large text-black">
                    D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.
                  </p>
                </div>
                <div className="hp-slider-client-wrapper margin-top _24px">
                  <div className="hp-client-wrapper flex flex-row">
                    <div>
                      <img
                        alt=""
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp"
                        className="client-img"
                      />
                    </div>
                    <div className="hp-client-info flex flex-col items-left justify-center text-black mb-5">
                      <div className="h6"><b>Diksha Pande</b></div>
                      <div className="text-large hp-client-position-wrap">
                        Co-founder,&nbsp;Samosa Party
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      alt=""
                      src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg"
                      loading="lazy"
                      className="client-brand-img mobile-hide"
                      height={80}
                      width={100}
                    />
                  </div>
                </div>
                <div className="hp-slider-arrow-wrapper margin-top _24px hide-from-tablet flex flex-row gap-7">
                  <a
                    data-sliderbutton="arrowPrev"
                    href="#"
                    className="sl-arrow-left w-inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
                    }}
                  >
                    <img
                      src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                      loading="lazy"
                      alt=""
                      className="hp-slider-arrow left"
                    />
                  </a>
                  <a
                    data-sliderbutton="arrowNext"
                    href="#"
                    className="sl-arrow-right w-inline-block ml-5"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentSlide((currentSlide + 1) % slides.length);
                    }}
                  >
                    <img
                      src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                      loading="lazy"
                      alt=""
                      className="hp-slider-arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c1080-65e70399" className="hp-slider-img-wrapper">
              <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c1081-65e70399" className="hp-slider-img-wrap">
                <img
                  alt=""
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp"
                  className="hp-slider-img is-samosaparty"
                />
              </div>
            </div>
            <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c1083-65e70399" className="slider-block stats">
              <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c1084-65e70399" className="hp-slider-stats-box bg-[#F1E9FB] max-w-[242px]">
                <span className="text-style-gradient md:text-2xl lg:text-4xl font-semibold">
                  upto 95%
                </span>
                <div className="cs-header-stats w-richtext mt-2 text-[18px] text-black">
                  <p>Demand Fulfilment</p>
                </div>
              </div>
              <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c108a-65e70399" className="hp-slider-stats-box bg-[#F1E9FB] max-w-[242px]">
                <span className="text-style-gradient md:text-2xl lg:text-4xl font-semibold">
                  &lt; 3%
                </span>
                <div className="cs-header-stats w-richtext mt-2 text-[18px] text-black">
                  <p>Daily Stock-out</p>
                </div>
              </div>
              <a href="/customer-stories/crest-helps-samosa-party-fulfil-95-of-their-customer-demand" className="button-secondary slider w-inline-block bord">
                <div className="btn-scondary-bg slider">
                  <span className="text-style-gradient md:text-xl lg:text-2xl font-semibold">
                    Read Story
                  </span>
                  <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dd545ea3ebe_Vector.svg" loading="lazy" alt=""/>
                </div>
              </a>
              <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c1095-65e70399" className="hp-slider-arrow-wrap">
                <a
                  data-sliderbutton="arrowPrev"
                  href="#"
                  className="sl-arrow-left w-inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
                  }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                    loading="lazy"
                    alt=""
                    id="prev-arrow"
                    className="hp-slider-arrow left"
                  />
                </a>
                <a
                  data-sliderbutton="arrowNext"
                  href="#"
                  className="sl-arrow-right w-inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentSlide((currentSlide + 1) % slides.length);
                  }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                    loading="lazy"
                    alt=""
                    className="hp-slider-arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
    content: (
      <>
        <div className="s-hp-slider-wrapper">
          <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c1068-65e70399" className="hp-slider-block">
            <div className="hp-slider-client-block">
              <div className="client-testimonial-wrapper">
                <p className="text-large text-black">
                As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.
While we had already implemented <a style={{textDecoration:"underline"}}>Crest</a> I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team <a style={{textDecoration:"underline"}}>Rahul Vishwakarma </a> & <a style={{textDecoration:"underline"}}> Yogesh Byahatti </a> for identifying the problem and being so quick with the solution, kudos to the amazing team you have.
</p>
              </div>
              <div className="hp-slider-client-wrapper margin-top _24px">
                <div className="hp-client-wrapper flex flex-row items-center" >
                  <div>
                    <img
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddd1080709540ff764308_P-Tal%20founder.jpg"
                      className="client-img mb-5"
                    />
                  </div>
                  <div className="hp-client-info flex flex-col items-left justify-center text-black mb-5">
                    <div className="h6"><b>Kriti Goel</b></div>
                    <div className="text-large hp-client-position-wrap">
                    Co-founder, P-TAL
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664d8f654c71b6204bdf301c_P%20TAL%20logo.svg"
                    loading="lazy"
                    className="client-brand-img mobile-hide max-h-20"
                    height={80}
                    width={100}
                  />
                </div>
              </div>
              <div className="hp-slider-arrow-wrapper margin-top _24px hide-from-tablet">
                <a
                  data-sliderbutton="arrowPrev"
                  href="#"
                  className="sl-arrow-left w-inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
                  }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                    loading="lazy"
                    alt=""
                    className="hp-slider-arrow left"
                  />
                </a>
                <a
                  data-sliderbutton="arrowNext"
                  href="#"
                  className="sl-arrow-right w-inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentSlide((currentSlide + 1) % slides.length);
                  }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                    loading="lazy"
                    alt=""
                    className="hp-slider-arrow ml-5"
                  />
                </a>
              </div>
            </div>
          </div>
          <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c1080-65e70399" className="hp-slider-img-wrapper">
            <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c1081-65e70399" className="hp-slider-img-wrap">
              <img
                alt=""
                loading="lazy"
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal-p-500.webp"
                className="hp-slider-img is-samosaparty"
                height={600}
              />
            </div>
          </div>
          <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c1083-65e70399" className="slider-block stats">
            <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c1084-65e70399" className="hp-slider-stats-box bg-[#F1E9FB] max-w-[242px]">
              <span className="text-style-gradient md:text-xl lg:text-2xl font-semibold ">
              Automated Invoice Reconciliation
              </span>
            </div>
            <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c108a-65e70399" className="hp-slider-stats-box bg-[#F1E9FB] max-w-[242px]">
              <span className="text-style-gradient md:text-xl lg:text-2xl font-semibold">
              Channel wise Sales Classification
              </span>
            </div>
            <div id="w-node-f38e47f3-0c4f-6028-3bb3-4914424c1095-65e70399" className="hp-slider-arrow-wrap">
              <a
                data-sliderbutton="arrowPrev"
                href="#"
                className="sl-arrow-left w-inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
                }}
              >
                <img
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                  loading="lazy"
                  alt=""
                  id="prev-arrow"
                  className="hp-slider-arrow left"
                />
              </a>
              <a
                data-sliderbutton="arrowNext"
                href="#"
                className="sl-arrow-right w-inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSlide((currentSlide + 1) % slides.length);
                }}
              >
                <img
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                  loading="lazy"
                  alt=""
                  className="hp-slider-arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </>
    ),
  },
  ];

  return (
    <div className="ct-slider mb-28 h-[1000px] px-20">
      <div
        data-delay="4000"
        data-animation="cross"
        className="hp-new-slider-wrap w-slider"
        data-autoplay="false"
        data-easing="ease"
        data-hide-arrows="false"
        data-disable-swipe="true"
        data-autoplay-limit="0"
        data-nav-spacing="3"
        data-duration="500"
        data-infinite="true"
        role="region"
        aria-label="carousel"
      >
        <div className="hp-new-slider-mask-wrap w-slider-mask" id="w-slider-mask-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hp-new-slide-wrap w-slide ${currentSlide === index ? "is-active" : ""}`}
              style={{ display: currentSlide === index ? "block" : "none" }}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
