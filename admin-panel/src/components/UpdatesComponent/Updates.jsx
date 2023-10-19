import React from "react";
import { UpdatesData } from "../../Data/Data";
import "./updates.css";

function Updates() {
  return (
    <div className="Updates">
      {UpdatesData.map((data,i) => {
        return (
          <div className="update" key={i}>
            <img src={data.img} alt="" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{data.name}</span>
                <span>{data.noti}</span>
              </div>
              <span>{data.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Updates;
