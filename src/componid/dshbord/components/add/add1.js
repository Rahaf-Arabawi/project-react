import React from "react";
import SidebarICon from "../SidebarICon/SidebarICon";
import Form from "../teacher/teacher";
import "../../dashbord.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Add() {
  return (
    <div>
      <div className="App1 h-100 bg-success w-100">
        <div className="sidebar bg-body">
          <SidebarICon />
        </div>
        <div className="dashboard bg-light">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Add;
