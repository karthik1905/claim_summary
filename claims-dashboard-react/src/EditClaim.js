import React, { Component } from 'react';

class EditClaim extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a class="navbar-brand" href="#">MediBuddy</a> */}
        <ul class="navbar-nav navbar-right list-unstyled">
            <li class="nav-item active">
                {/* <a class="nav-link" href="#">Home</a> */}
            </li>
        </ul>
    </nav>
    <div class="container container-table">
        <div class="row vertical-center-row">
            <div class="text-center col-md-4 col-md-offset-4">
                <table>
                    <tr>
                        <td>
                            <label for="EmployeeId">Employee Id</label>
                        </td>
                        <td>
                            <input type="text" id="EmployeeIdUpdate" placeholder="12345" readonly></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="EmployeeName">Employee Name</label>
                        </td>
                        <td>
                            <input type="text" id="EmployeeNameUpdate" placeholder="Karthik.D" readonly></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="ClaimNumber">Claim Number</label>
                        </td>
                        <td>
                            <input type="text" id="ClaimNumber" value="451853187" placeholder="xxx-xxx-xxx"/>
                            <p class="error" id="ClaimNumberError"></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="ClaimType">Claim Type</label>
                        </td>
                        <td>
                            <select name="claimType">
                                <option value="“Submitted”">Submitted</option>
                                <option value="“Pending”">Pending</option>
                                <option value="”Received”">Received</option>
                                <option value="More Info Required">More Info Required</option>
                                <option value="“Pending”">Denied</option>
                                <option value="”Received”">Rejected</option>
                                <option value="More Info Required">Paid</option>
                              </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Claim Program</label>
                        </td>
                        <td>
                            <input type="text" id="ClaimPrograms" placeholder="Accident" />
                            <p class="error" id="ClaimProgramsError"></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="StartDate">Start Date</label>
                        </td>
                        <td>
                            <input type="date" id="StartDate" value="2020-08-01" name="StartDate" />
                            <p class="error" id="StartDateError"></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="End Date">End Date</label>
                        </td>
                        <td>
                            <input type="date" value="2020-08-24" id="EndDate" name="EndDate"/>
                            <p class="error" id="EndDateError"></p>
                        </td>
                    </tr>
                </table>
                <div>
                    <span>
                        <button type="button" onclick="cancelUpdate()" class="btn btn-primary">Cancel</button>
                    </span>
                    <span>
                        <button type="button" onclick="updateClaimValidation()" class="btn btn-success">Update</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
    </div>
        );
    }
}

EditClaim.propTypes = {

};

export default EditClaim;