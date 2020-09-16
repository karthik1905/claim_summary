import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useFormValidation from "./useFormValidation";
import formValidation from "./formUpdationValidation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

const EditClaim = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const {
    errors,
    updatedUserData,
    setUpdatedUser,
    handleFormChange,
    handleFormSubmit,
  } = useFormValidation(formValidation);
  console.log(errors);
  const [updateFlag, setUpdateFlag] = useState({
    flag: false,
  });
  const [values, setClaimsValues] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${props.match.params.id}`)
      .then((response) => response.data)
      .then((claims) => {
        setClaimsValues(claims);
        setUpdatedUser({
          ...updatedUserData,
          claimNumber: claims.claimNumber,
          claimPrograms: claims.claimPrograms,
          claimType: claims.claimType,
          startDate: claims.startDate,
          endDate: claims.endDate,
        });
      });
  }, []);
  const updateMessage = () => {
    if (Object.keys(errors).length === 0)
      setUpdateFlag({
        ...updateFlag,
        flag: true,
      });
    else
      setUpdateFlag({
        ...updateFlag,
        flag: false,
      });
    console.log("updateflag", updateFlag, updateFlag.flag);
  };
  const addClaim = () => {
    console.log(updatedUserData);
    handleFormSubmit();
    console.log("error addclaim", errors);
    console.log("updated userdata", updatedUserData);
    if (Object.keys(errors).length === 0)
      updateMessage();
  };

  const reviewClaim = () => {
    console.log("reviewclaim func");
    if (Object.keys(errors).length === 0) {
      console.log("here dispatch");
      dispatch({
        type: "EDIT",
        payload: {
          empId: values.empId,
          empName: values.empName,
          claimNumber: updatedUserData.claimNumber,
          claimType: updatedUserData.claimType,
          claimPrograms: updatedUserData.claimPrograms,
          startDate: updatedUserData.startDate,
          endDate: updatedUserData.endDate,
        },
      });
      history.push("/review");
    } else console.log("else dispatch");
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
                  <input
                    type="text"
                    id="empId"
                    value={values.empId}
                    disabled
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Employee Name</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="empName"
                    value={values.empName}
                    disabled
                  ></input>
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
              <Link to={`/claims`}>
                <button type="button" className="btn btn-primary">
                  Cancel
                </button>
              </Link>
            </span>

            {/* {updateFlag.flag ? ( */}
              <span>
                <button
                  type="button"
                  onClick={(e) => addClaim(e)}
                  className="btn btn-primary"
                >
                  Update
                </button>
              </span>
            {/* ) : ( */}
              
              <span>
                <Link to="/review">
                <button
                  type="button"
                  onClick={(e) => reviewClaim(e)}
                  className="btn btn-success"
                >
                  review
                </button>
                </Link>
              </span>
            {/* )} */}
          </div>
          {/* <div>{updateFlag.flag ? <p>Updated Successfully!</p> : null}</div> */}
        </div>
      </div>
    </div>
  );
};

export default EditClaim;
