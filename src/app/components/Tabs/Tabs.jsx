"use client";
import React, { useRef, useState } from "react";
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
      id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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

  const [tabTitle, setTabTitle] = useState(tabs)


  const dragItem = useRef(null)
  const dragOverItem = useRef(null)


  // Handle Drag Start
  const handleDragStart = (e, index) => {
    console.log("Drag Start", index)
  }

  // Handle Drag Enter
  const handleDragEnter = (e, index) => {
    e.preventDefault();
    console.log("Drag Enter", index)
  }

  // Handle Drag End
  const handleDragEnd = (e) => {
    console.log("Drag End")
  }

  // Handle Drag Sorting
  const handleSorting = () => {
    // Duplicate Items
    let tabItem = [...tabTitle]

    // Remove and Save Dragged Item
    const draggedItemContent = tabItem.splice(dragItem.current, 1)[0]

    // Switching the position
    tabItem.splice(dragOverItem.current, 0, draggedItemContent)

    // Reset the position Ref
    dragItem.current = null
    dragOverItem.current = null

    setTabTitle(tabItem)
  }
 
  return (
    <div className="vertical-tabs">
      <div className="tabs">
        {tabTitle.map((tab, index) => (
          <div
            key={index}
            className={`tab ${tab.id === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
            draggable
            onDragStart={(e)=>(dragItem.current = index)}
            onDragEnter={(e)=>(dragOverItem.current = index)}
            onDragEnd={handleSorting}
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
