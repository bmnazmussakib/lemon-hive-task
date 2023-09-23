import React from "react";
import "./conference.scss";
import { BsLightningChargeFill } from "react-icons/bs";
import { MdOutlineOfflineBolt } from "react-icons/md";
import { BiBoltCircle } from "react-icons/bi";
import { FaDotCircle } from "react-icons/fa";
import Link from "next/link";

export default function Conference() {
  return (
    <div className="conference">
      <div className="container">
        <h2 className="section-title">Conference</h2>

        {/* <div className="step-icon">
          <BsLightningChargeFill />
        </div> */}
        <div className="timeline">
          <div className="content active">
            <div className="step-icon active">
              <BsLightningChargeFill />
              {/* <MdOutlineOfflineBolt /> */}
              {/* <BiBoltCircle /> */}
            </div>
            <div className="date">
              <p>02 September, 2023</p>
            </div>
            <Link href="/organizer">
            <div className="text-box">
             <div className="icon">
             <FaDotCircle />
             </div>
              <div className="text">
                <h4>Freezing Edge 2023</h4>
                <p>The edge isn't bleeding, it's freezing!</p>
              </div>
            </div>
            </Link>
          </div>

          <div className="content">
            <div className="step-icon">
              <BsLightningChargeFill />
              {/* <MdOutlineOfflineBolt /> */}
              {/* <BiBoltCircle /> */}
            </div>
            <div className="date">
              <p>02 September, 2023</p>
            </div>
            <Link href="/organizer">
            <div className="text-box">
             <div className="icon">
             <FaDotCircle />
             </div>
              <div className="text">
                <h4>Freezing Edge 2023</h4>
                <p>The edge isn't bleeding, it's freezing!</p>
              </div>
            </div>
            </Link>
          </div>

          <div className="content">
            <div className="step-icon">
              <BsLightningChargeFill />
              {/* <MdOutlineOfflineBolt /> */}
              {/* <BiBoltCircle /> */}
            </div>
            <div className="date">
              <p>02 September, 2023</p>
            </div>
            <Link href="/organizer">
            <div className="text-box">
             <div className="icon">
             <FaDotCircle />
             </div>
              <div className="text">
                <h4>Freezing Edge 2023</h4>
                <p>The edge isn't bleeding, it's freezing!</p>
              </div>
            </div>
            </Link>
          </div>

          <div className="content">
            <div className="step-icon">
              <BsLightningChargeFill />
              {/* <MdOutlineOfflineBolt /> */}
              {/* <BiBoltCircle /> */}
            </div>
            <div className="date">
              <p>02 September, 2023</p>
            </div>
            <Link href="/organizer">
            <div className="text-box">
             <div className="icon">
             <FaDotCircle />
             </div>
              <div className="text">
                <h4>Freezing Edge 2023</h4>
                <p>The edge isn't bleeding, it's freezing!</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
