import React, { useState, useEffect } from "react";
import "./UpdateClaim.css";
import useFormValidation from "./useFormValidation";
import formValidation from "./formUpdationValidation";
import axios from "axios";
import {Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EditClaim from "./EditClaim";

const UpdateClaim = () => {
  const {
    errors,
    tableData,
    handleFormChange,
    handleFormSubmit,
    handleTableData,
  } = useFormValidation(formValidation);

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
  },[]);
  
  let renderTable = (value, idx) => {
    let number = value.claimNumber;
    return (
      <tr>
        <td>{value.claimNumber}</td>
        <td>{value.empName}</td>
        <td>{value.empId}</td>
        <td>{value.claimType}</td>
        <td>{value.claimPrograms}</td>
        <td>{value.startDate}</td>
        <td>{value.endDate}</td>
        <td>
        <Link  to={`/add/${value.claimNumber}`}>
          <button
            type="button"
            className="btn btn-primary"
          >
            Edit
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
          {/* {tableData.table ? ( */}
            <div>
              <form>
                <table className="table table-dark">
                  <thead>
                    <tr>
                      <th>EmployeeId</th>
                      <th>Employee Name</th>
                      <th>Claim Number</th>
                      <th>Claim Type</th>
                      <th>Claim Program</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Action</th>
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
          {/* ) : ( */}
             {/* <div className="editTable">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>Employee Id</label>
                    </td>
                    <td>
                      <input type="text"  onChange={handleFormChange} id="empId"></input>
                      <p className="error text-danger" id="empIdError">
                        {errors.empIdError}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Employee Name</label>
                    </td>
                    <td>
                      <input type="text"  onChange={handleFormChange} id="empName"></input>
                      <p className="error text-danger" id="empNameError">
                        {errors.empNameError}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Claim Number</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="claimNumber"
                        onChange={handleFormChange}
                      />
                      <p className="error text-danger" id="claimNumberError">
                        {errors.claimNumberError}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Claim Type</label>
                    </td>
                    <td>
                      <select onChange={handleFormChange} id="claimType">
                        <option value="Select">Select</option>
                        <option value="Submitted">Submitted</option>
                        <option value="Pending">Pending</option>
                        <option value="Received">Received</option>
                        <option value="More Info Required">
                          More Info Required
                        </option>
                        <option value="Pending">Denied</option>
                        <option value="Received">Rejected</option>
                        <option value="More Info Required">Paid</option>
                      </select>
                      <p className="error text-danger" id="claimTypeError">
                        {errors.claimTypeError}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Claim Program</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="claimPrograms"
                        onChange={handleFormChange}
                      />
                      <p className="error text-danger" id="claimProgramsError">
                        {errors.claimProgramsError}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Start Date</label>
                    </td>
                    <td>
                      <input
                        type="date"
                        id="startDate"
                        onChange={handleFormChange}
                      />
                      <p className="error text-danger" id="startDateError">
                        {errors.startDateError}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>End Date</label>
                    </td>
                    <td>
                      <input
                        type="date"
                        onChange={handleFormChange}
                        id="endDate"
                      />
                      <p className="error text-danger" id="endDateError">
                        {errors.endDateError}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="editTableBtn">
                <span>
                  <button type="button" className="btn btn-primary">
                    Cancel
                  </button>
                </span>
                <span>
                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="btn btn-success"
                  >
                    Update
                  </button>
                </span>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default UpdateClaim;
