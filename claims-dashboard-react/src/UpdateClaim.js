import React from "react";
import "./UpdateClaim.css";
import useFormValidation from './useFormValidation';
import formValidation from './formUpdationValidation';

const UpdateClaim = () => {

  const {errors,tableData,tableValues,handleFormChange,handleFormSubmit,getTable,handleTableData}=useFormValidation(formValidation);
    
    return (
      <div>
        <div className="container-fluid">
            <div>
            {tableData.table ? (
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
                    <tr>
                      <td>12345</td>
                      <td>Karthik</td>
                      <td>kar123</td>
                      <td>Submitted</td>
                      <td>Accident</td>
                      <td>12/12/2019</td>
                      <td>24/01/2020</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={handleTableData}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              </div>
            ) : (
              <div className="editTable">
                 <table>
                     <tbody>
                    <tr>
                        <td>
                            <label>Employee Id</label>
                        </td>
                        <td>
                            <input type="text" id="empId" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Employee Name</label>
                        </td>
                        <td>
                            <input type="text" id="empName" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Claim Number</label>
                        </td>
                        <td>
                            <input type="text" id="claimNumber" onChange={handleFormChange} />
                            <p className="error text-danger" id="claimNumberError">{errors.claimNumberError}</p>
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
                                <option value="More Info Required">More Info Required</option>
                                <option value="Pending">Denied</option>
                                <option value="Received">Rejected</option>
                                <option value="More Info Required">Paid</option>
                              </select>
                              <p className="error text-danger" id="claimTypeError">{errors.claimTypeError}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Claim Program</label>
                        </td>
                        <td>
                            <input type="text" id="claimPrograms" onChange={handleFormChange}/>
                            <p className="error text-danger" id="claimProgramsError">{errors.claimProgramsError}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Start Date</label>
                        </td>
                        <td>
                            <input type="date" id="startDate" onChange={handleFormChange} />
                            <p className="error text-danger" id="startDateError">{errors.startDateError}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>End Date</label>
                        </td>
                        <td>
                            <input type="date" onChange={handleFormChange} id="endDate"/>
                            <p className="error text-danger" id="endDateError">{errors.endDateError}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="editTableBtn">
                    <span>
                        <button type="button" className="btn btn-primary">Cancel</button>
                    </span>
                    <span>
                        <button type="button" onClick={handleFormSubmit} className="btn btn-success">Update</button>
                    </span>
                </div>
                </div>
              
            )}
            </div>
              </div>
        </div>
    );
}

export default UpdateClaim;
