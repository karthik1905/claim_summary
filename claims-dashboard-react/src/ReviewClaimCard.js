import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const ReviewClaimCard = () => {
  let claims = useSelector((state) => state.claim);
  const [tableValues, setTableValues] = useState({});
  console.log("reiew claims", claims);
  console.log("empid",claims.empId);

  const [values, setClaimsValues] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${claims.empId}`)
      .then((response) => response.data)
      .then((claim) => {
        console.log(claim);
        setClaimsValues(claim);
      });
      console.log("values",values);
  }, []);

  const submitClaim = (e) => {
    let postClaims = {
        empId: claims.empId,
        empName: claims.empName,
        claimNumber:  claims.claimNumber,
        claimType: claims.claimType,
        claimPrograms: claims.claimPrograms,
        startDate: claims.startDate,
        endDate: claims.endDate
      }
    axios
    .post(`http://localhost:8080/api/products` , postClaims)
    .then((response) => {
        console.log("post response ", response)
    });
    
  }

  console.log("values1",values);
  console.log("values2",values);
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
                <input type="text" id="empId" defaultValue={values.empId} disabled></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Employee Name</label>
              </td>
              <td>
                <input type="text" id="empName" defaultValue={values.empName} disabled></input>
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
                  className= {claims.claimNumber !== values.claimNumber ? "border border-primary" : null }
                  defaultValue={claims.claimNumber}
                />
              </td>
            </tr> 
            <tr>
              <td>
                <label>Claim Type</label>
              </td>
              <td>
                
              <input
                  type="text"
                  id="claimType"
                  className= {claims.claimType !== values.claimType ? "border border-primary" : null }
                  defaultValue={claims.claimType}
                />
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
                  className= {claims.claimPrograms !== values.claimPrograms ? "border border-primary" : null}
                  defaultValue={claims.claimPrograms }
                />
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
                  className= {claims.startDate !== values.startDate ? "border border-primary" : null}
                  defaultValue={claims.startDate}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>End Date</label>
              </td>
              <td>
                <input
                  type="date"
                  className= {claims.endDate !== values.endDate ? "border border-primary" : null }
                  defaultValue={claims.endDate }
                  id="endDate"
                />
              </td>
            </tr>
            </tbody>
          </table>
          <div className="editTableBtn">
            <span>
            <Link  to={`/add/${values.empId}`}>
                <button
                  type="button"
                  className="btn btn-primary"
                >
                  Edit
                </button>
              </Link>
            </span>
            <span>
              <Link to={'/review'}>
                <button
                  type="button"
                    onClick={(e) => submitClaim(e)}
                  className="btn btn-success"
                >
                  Submit
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewClaimCard;
