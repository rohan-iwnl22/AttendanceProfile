import React from "react";
import "./sup.css";
import BranchDropDown from "./BranchDropDown";
import YearDropDown from "./YearDropDown";
import SemDropDown from "./SemDropDown";



const SUP = () => {
  const studentData = [
    {
      name: "John Doe",
      subjects: {
        Math: 1,
        Science: 0,
        English: 1,
        History: 1,
        Geography: 1,
        Art: 0,
      },
      percentage: "85%",
      remark: "Good performance",
    },
    {
      name: "Jane Smith",
      subjects: {
        Math: 1,
        Science: 1,
        English: 1,
        History: 0,
        Geography: 1,
        Art: 1,
      },
      percentage: "90%",
      remark: "Excellent performance",
    },
    {
      name: "Bob Johnson",
      subjects: {
        Math: 0,
        Science: 1,
        English: 1,
        History: 0,
        Geography: 1,
        Art: 1,
      },
      percentage: "75%",
      remark: "Needs improvement",
    },
    {
      name: "Alice Williams",
      subjects: {
        Math: 1,
        Science: 1,
        English: 1,
        History: 1,
        Geography: 1,
        Art: 1,
      },
      percentage: "88%",
      remark: "Very good",
    },
    {
      name: "Tom Brown",
      subjects: {
        Math: 1,
        Science: 1,
        English: 0,
        History: 1,
        Geography: 0,
        Art: 1,
      },
      percentage: "82%",
      remark: "Consistent performance",
    },
  ];

  return (
    <>
      <div className="branchButton">
        <BranchDropDown />
        <YearDropDown />
        <SemDropDown />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th rowSpan="2">Name</th>
              <th colSpan="6">Subject</th>
              <th rowSpan="2">Percentage</th>
              <th rowSpan="2">Remark</th>
            </tr>
            <tr>
              <th>Math</th>
              <th>Science</th>
              <th>English</th>
              <th>History</th>
              <th>Geography</th>
              <th>Art</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                {Object.keys(student.subjects).map((subject, subIndex) => (
                  <td key={subIndex}>{student.subjects[subject]}</td>
                ))}
                <td>{student.percentage}</td>
                <td>{student.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SUP;
