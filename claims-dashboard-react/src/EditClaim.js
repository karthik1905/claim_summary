import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useFormValidation from "./useFormValidation";
import formValidation from "./formUpdationValidation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar'

const EditClaim = (employeeId, props) => {
  const dispatch = useDispatch();
  const { errors, updatedUserData, handleFormChange } = useFormValidation(formValidation);
  const [values, setClaimsValues] = useState({});
  console.log(employeeId);
  useEffect(() => {
    console.log(window.location.href.indexOf("add/"));
    let link = window.location.href;
    let id = link.substring(26, link.length);
    console.log(id);
    axios
      .get(`http://localhost:8080/api/products/${id}`)
      .then((response) => response.data)
      .then((claims) => {
        console.log(claims);
        setClaimsValues(claims);
      });
  }, []);
  const addClaim = () => {
    console.log(updatedUserData);
    dispatch({
      type: "EDIT",
      payload: {
        empId: values.empId,
        empName: values.empName,
        claimNumber: updatedUserData.claimNumber,
        claimType: updatedUserData.claimType,
        claimPrograms: updatedUserData.claimPrograms,
        startDate: updatedUserData.startDate,
        endDate: updatedUserData.endDate
      },
    });
  };
  return (
    <div>
      <Navbar />
    <div className="container-fluid">
      <div className="editTable">
        <table>
          <tbody>
            <tr>
              <td>
                <label>Employee Id</label>
              </td>
              <td>
                <input type="text" id="empId" value={values.empId} disabled></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Employee Name</label>
              </td>
              <td>
                <input type="text" id="empName" value={values.empName} disabled></input>
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
                  defaultValue={values.claimNumber}
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
                <select
                  defaultValue={values.claimType}
                  onChange={handleFormChange}
                  id="claimType"
                >
                  <option value="Select">Select</option>
                  <option value="Submitted">Submitted</option>
                  <option value="Pending">Pending</option>
                  <option value="Received">Received</option>
                  <option value="More Info Required">More Info Required</option>
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
                  defaultValue={values.claimPrograms}
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
                  defaultValue={values.startDate}
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
                  defaultValue={values.endDate}
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
            
          <Link to={`/review`}>
            <button
              type="button"
              onClick={(e) => addClaim(e)}
              className="btn btn-success"
            >
              Update
            </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EditClaim;
// export default EditClaim;
