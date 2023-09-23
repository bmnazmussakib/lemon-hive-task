"use client"
import React, { useState } from 'react';
import './accordion.scss'
import { RiArrowUpDownLine } from "react-icons/ri";
import AccordionContent from '../AccordionContent/AccordionContent';

function AccordionTabs() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabIndex) => {
    setActiveTab((prevTab) => (prevTab === tabIndex ? null : tabIndex));
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
    <div className="accordion-tabs">
      {tabs.map((tab, index) => (
        <div key={index} className="tab">
          <div
            className={`tab-header ${activeTab === index ? 'active' : ''}`}
            onClick={() => toggleTab(index)}
          >
            <span>
            <RiArrowUpDownLine />
          </span>
            {tab.title}
          </div>
          {activeTab === index && (
            <div className="tab-content">
              
          <AccordionContent data={tab}/>
          </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AccordionTabs;
