"use client";
import React, { useState } from "react";
import "./tabs.scss";
import { RiArrowUpDownLine } from "react-icons/ri";
import TabContent from "../TabContent/TabContent";

function VerticalTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      title: "Organizer",
      content: [
        {
          img: "/img/Rectangle 215@2x.png",
          title: "Siddhartha",
          description: "Lorem ipsum dolor sit amet, con sec tetur ad.",
        },
        {
          img: "/img/Rectangle 215@2x.png",
          title: "Candide",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
        },
        {
          img: "/img/Rectangle 215@2x.png",
          title: "The Little Prince",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
        },
      ],
    },
    {
      title: "Speakers",
      content: [
        {
          img: "/img/Ronald-Richards.png",
          title: "Ronald Richards",
          description: "Lorem ipsum dolor sit amet, con sec tetur ad.",
          social: {
            twitter: "",
            linkedin: "",
            dribble: "",
            github: "",
          },
        },
        {
          img: "/img/Ronald-Richards.png",
          title: "Ronald Richards",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
          social: {
            twitter: "",
            linkedin: "",
            dribble: "",
            github: "",
          },
        },
        {
          img: "/img/Ronald-Richards.png",
          title: "Ronald Richards",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
          social: {
            twitter: "",
            linkedin: "",
            dribble: "",
            github: "",
          },
        },
      ],
    },
    {
      title: "Schedule",
      content: [
        {
          date: "February 11, 2014",
          day: "Wednesday",
          event: [
            {
              title: "registration",
              duration: "05.00-06.00",
            },
            {
              title: "registration",
              duration: "05.00-06.00",
            },
            {
              title: "registration",
              duration: "05.00-06.00",
            },
          ],
        },
        {
          date: "February 11, 2014",
          day: "Wednesday",
          event: [
            {
              title: "registration",
              duration: "05.00-06.00",
            },
            {
              title: "registration",
              duration: "05.00-06.00",
            },
            {
              title: "registration",
              duration: "05.00-06.00",
            },
          ],
        },
      ],
    },
    {
      title: "Sponsors",
      content: [
        {
          img: "/img/Louis-Vuitton.png",
          title: "Louis Vuitton",
          description: "Lorem ipsum dolor sit amet, con sec tetur ad.",
        },
        {
          img: "/img/Louis-Vuitton.png",
          title: "Louis Vuitton",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
        },
        {
          img: "/img/Louis-Vuitton.png",
          title: "Louis Vuitton",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
        },
      ],
    },
  ];

  return (
    <div className="vertical-tabs">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            <span>
              <RiArrowUpDownLine />
            </span>
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${index === activeTab ? "active" : ""}`}
          >
            <TabContent data={tab} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerticalTabs;
