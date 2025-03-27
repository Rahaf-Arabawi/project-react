import React from "react";
import SidebarICon from "./SidebarICon/SidebarICon";
import TopCard from "./TopCard/TopCard"; // Import TopCard here
import Clint from "./clint1/clint"; // Import Clint here
import Chart from "./chart.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../dashbord.css";

function dashbord() {
  return (
    <div>
      <div className="App1 h-100 bg-success w-100">
        <div className="sidebar bg-body">
          <SidebarICon />
        </div>
        <div className="dashboard bg-light">
          <TopCard />
          <div className="ChartAndOrders p-3 justify-content-between">
            <Chart />
            <Clint />
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashbord;
