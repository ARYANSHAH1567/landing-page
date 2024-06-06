"use client"
import { Key } from "lucide-react";
import React, { useState } from "react";

const Target: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const tabs = [
    {
      title: "Accurate Demand Forecasting",
      tab: "Tab 1",
      content:
        "Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions.",
      link: "/product/demand-forecasting",
      imageSrc: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-800.webp"
    },
    {
      title: "HELIX: Workflow Automation",
      tab: "Tab 2",
      content:
        "Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a bird's eye view of your supply chain, and help you do things a spreadsheet never can.",
      link: "/product/sales-and-operations-planning",
      imageSrc: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-800.webp"
    },
    {
      title: "Automated Purchase Planning",
      tab: "Tab 3",
      content:
        "Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What's more, Crest improves with every planning cycle as the data set gets richer.",
      link: "/product/purchase-planning",
      imageSrc: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bd0e4b4b78267e66b04_Purchase%20planning-p-800.webp"
    },
    {
      title: "Automated Distribution Planning",
      tab: "Tab 4",
      content:
        "Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.",
      link: "/product/automated-distribution-planning",
      imageSrc: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d89a9ea3f05_distribution%2520planning%2520type-2%2520-p-800.webp"
    },
    {
      title: "Easy Integration",
      tab: "Tab 5",
      content:
        "From all online store solutions to cloud ERPs, Crest integrates seamlessly with your current tech and ops stack. What's more? Connecting them to Crest will give you actionable insights.",
      link: "/product/automated-allocation-planning",
      imageSrc: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d3395ea3f06_integration%20type-2.webp"
    },
    {
        title: "Custom Dashboards",
        tab: "Tab 6",
        content:
          "Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.",
        link: "/product/automated-allocation-planning",
        imageSrc: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64366b9b4373ee32f68ac19c_dashboard%20ss-p-800.webp"
      },
      {
        title: "Consensus Planning",
        tab: "Tab 7",
        content:
          "Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario planning.",
        link: "/product/automated-allocation-planning",
        imageSrc: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6634db1d80804c8f875b196c_consen%20home%20-p-800.png"
      }
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(activeTab === tab ? tab : tab);
  };

  const activeTabData = tabs.find((tab) => tab.tab === activeTab);

  return (
    <section className="spreadsheet-tab-section py-[120px]  w-full flex flex-row justify-between">
      <div className="home-tabs-container">
        <div className="container">
          <div className="c-autotabs w-tabs">
            <div className="c-autotabs_menu w-tab-menu flex flex-col items-left pl-[30px]" role="tablist">
              {tabs.map(({ title, tab, content, link }) => (
                <a
                  key={tab}
                  className={`c-autotabs_link w-inline-block w-tab-link ${
                    activeTab === tab ? "w--current" : ""
                  }`}
                  onClick={() => handleTabClick(tab)}
                  role="tab"
                >
                  <div className="c-autotabs_summary">
                    <div className="c-title-wrapper">
                      <div className={`c-title-3 h5 text-[21px] leading-[40px] py-[20px] pr-[35px] max-w-[535px] font-bold text-black ${activeTab===tab&&'text-style-gradient'}`}>
                           {title}
                        </div>
                      {!activeTab && <hr className="w-[535px] text-gray-500 opacity-[0.7]"/>}
                      {activeTab !== tab && <hr className="w-[535px] text-gray-500 opacity-[0.7]"/>}
                      
                    </div>
                  </div>
                  {activeTab === tab && (
                    <div className="c-autotabs_paragraph text-black">
                      <div className="c-text-wrapper">
                        <p className="text-medium max-w-[535px]">{content}</p>
                      </div>
                      <div
                        data-link-url={link}
                        className="text-btn-secondory b-white tab-btn"
                      >
                        <div className="text-block">Learn more</div>
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63ff3b3e4dc16be9322e8817_right%20arrow.svg"
                          alt=""
                          className="right-arrow-svg"
                        />
                      </div>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="b-dark h-[44vw] w-[50vw] sticky z-40 target-img rounded-l-[15px]">
        {/* {activeTab===tab && (<img src={`${imageSrc}`} alt="" className="pt-[150px] pl-[25px]"/>)} */}
       { tabs.map(({ tab,imageSrc })=>(
            activeTab && activeTab===tab && (<img key={tab} src={imageSrc} alt="" className="pt-[150px] pl-[25px]"/>)
        ))}
      </div>
    </section>
  );
};

export default Target;
