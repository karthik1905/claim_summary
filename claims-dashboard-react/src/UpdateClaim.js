import React, { useState, useEffect } from "react";
import "./UpdateClaim.css";
import axios from "axios";
import {Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MdEdit } from "react-icons/md";

const UpdateClaim = () => {

  const [tableValues, setTableValues] = useState([
    {
      claimNumber: "",
      claimType: "",
      claimPrograms: "",
      startDate: "",
      endDate: "",
      empName: "",
      empId: "",
    },
  ]);

  useEffect(() => {
    console.log("get table func");
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => response.data)
      .then((claims) => {
        console.log(claims);
        setTableValues(claims);
      });
    console.log(tableValues);
  },[tableValues]);
  
  let renderTable = (value, idx) => {
    return (
      <tr>
        <td>{value.empId}</td>
        <td>{value.claimNumber}</td>
        <td>{value.empName}</td>
        <td>{value.claimType}</td>
        <td>{value.claimPrograms}</td>
        <td>{value.startDate}</td>
        <td>{value.endDate}</td>
        <td>
        <Link  to={`/add/${value.empId}`}>
          <button
            type="button"
            className="btn btn-primary"
          >
            <MdEdit />
          </button>
            </Link>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="container-fluid">
        <div>
            <div>
              <form>
                <table className="table table-hover table-striped table-dark">
                  <thead>
                    <tr>
                      <th>EmployeeId</th>
                      <th>Employee Name</th>
                      <th>Claim Number</th>
                      <th>Claim Type</th>
                      <th>Claim Program</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableValues.map((value, idx) => {
                      console.log("map value" + value);
                      return renderTable(value, idx);
                    })}
                  </tbody>
                </table>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateClaim;
