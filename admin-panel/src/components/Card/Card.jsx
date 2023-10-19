import React from "react";
import "./card.css";
import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { UilEstate } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from "react-apexcharts";

const Card = (props) => {
  const [expended, setExpended] = useState(false);
  return (
    <AnimateSharedLayout>
      {expended ? (
        <ExpandedCard param={props} setExpended={() => setExpended(false)} />
      ) : (
        <CompactCard param={props} setExpended={() => setExpended(true)} />
      )}
    </AnimateSharedLayout>
  );
};

function CompactCard({ param, setExpended }) {
  //   const Png = param.png;
  //   console.log("png", Png);
  return (
    <motion.div
      className="CompactCard"
      style={{
        backgroundColor: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpended}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <UilEstate />
        <span>${param.value}</span>
        <span>Last 24 Hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, setExpended }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="ExpanedCard"
      style={{
        backgroundColor: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpended} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>Last 24 Hours</span>
    </motion.div>
  );
}

export default Card;
