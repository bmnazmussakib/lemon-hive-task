import React from "react";
import Tabs from "../components/Tabs/Tabs";
import "./style.scss";
import Accordion from "../components/Accordion/Accordion";

export default function page() {
  return (
    <div className="tab-wrapper">
      <div className="container">
        <div className="title-wrapper">
          <h1>Conference info </h1>
          <p>
            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
            fermentum.
          </p>
        </div>
        <Tabs />
        <Accordion />
      </div>
    </div>
  );
}
