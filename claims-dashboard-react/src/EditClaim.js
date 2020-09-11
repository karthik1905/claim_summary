import React, { useEffect, useState } from 'react';
import useFormValidation from "./useFormValidation";
import formValidation from "./formUpdationValidation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const EditClaim = (props) => {
    const {
      errors,
      handleFormChange
    } = useFormValidation(formValidation);
    const[values,setClaimsValues] = useState({});
    useEffect(() => {
        console.log("editclaim useeffect", props.match.params.id);
        axios
          .get(`http://localhost:8080/api/products/${props.match.params.id}`)
          .then((response) => response.data)
          .then((claims) => {
            console.log(claims);
            setClaimsValues(claims);
          });
        console.log(values);
      }, []);
      
      console.log(values);
    return (
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
                      <input type="text" id="empName"  value={values.empName} disabled></input>
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
                        value={values.claimNumber}
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
                      <select vaule={values.claimType} onChange={handleFormChange} id="claimType">
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
                        value={values.claimPrograms}
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
                        value={values.startDate}
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
                        value={values.endDate}
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
                    // onClick={handleFormSubmit}
                    className="btn btn-success"
                  >
                    Update
                  </button>
                </span>
              </div>
            </div>
        </div>
    );
};

export default EditClaim;