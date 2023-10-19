import React from "react";
import "./sidebar.css";
import Logo from "../../Assets/Images/logo.png";
import { SidebarData } from "../../Data/Data";
import { UilEstate } from "@iconscout/react-unicons";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { useState } from "react";
import {motion} from 'framer-motion'
function SideBar() {
  const [selected, setSeleted] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true:{
      left:'0'
    },
    false:{
      left:'-60%'
    }
  }
  return (
    <>
      <div className="bars" style={expanded ? { left: "60%" } : { left: "5%" }}
      onClick={() =>setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div className="Sidebar" 
      variants={sidebarVariants} animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        <div className="logo">
          <img src={Logo} alt="" />
          <span>FRESH GO</span>
        </div>
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => {
                  setSeleted(index);
                }}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SideBar;
