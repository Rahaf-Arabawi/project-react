import React, { useEffect, useState } from "react";
import HeaderD from "../HeaderD";
import "./TopCard.css";

const TopCard = () => {
  const [students, setStudents] = useState([]);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("clintsData")) || [];
    setStudents(storedStudents);

    const males = storedStudents.filter(
      (student) => student.gender === "Male"
    ).length;
    const females = storedStudents.filter(
      (student) => student.gender === "Female"
    ).length;

    setMaleCount(males);
    setFemaleCount(females);
  }, []);

  const totalStudents = students.length;

  return (
    <>
      <HeaderD header="Dashboard" />
      <div className="top-cord px-3">
        <div className="bg-body p-3 rounded-3 d-flex justify-content-between">
          <div>
            <p className="fw-bold fs-4 m-0">2</p>
            <p className="text-secondary m-0">Total Teachers</p>
          </div>
          <div className="h-100 d-flex justify-content-center align-items-center">
          </div>
        </div>
        <div className="bg-body p-3 rounded-3 d-flex justify-content-between">
          <div>
            <p className="fw-bold fs-4 m-0">{totalStudents}</p>
            <p className="text-secondary m-0">Total Students</p>
          </div>
          <div className="h-100 d-flex justify-content-center align-items-center">
          </div>
        </div>
        <div className="bg-body p-3 rounded-3 d-flex justify-content-between">
          <div>
            <p className="fw-bold fs-4 m-0">{femaleCount}</p>
            <p className="text-secondary m-0">Girls</p>
          </div>
          <div className="h-100 d-flex justify-content-center align-items-center">
          </div>
        </div>
        <div className="bg-body p-3 rounded-3 d-flex justify-content-between">
          <div>
            <p className="fw-bold fs-4 m-0">{maleCount}</p>
            <p className="text-secondary m-0">Boys</p>
          </div>
          <div className="h-100 d-flex justify-content-center align-items-center">
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCard;
