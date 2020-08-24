function updateClaimValidation() {
    let flag = true;
    this.claimNumber = document.getElementById('ClaimNumber').value;
    this.claimPrograms = document.getElementById('ClaimPrograms').value;
    document.getElementById("ClaimNumberError").innerHTML = null;
    document.getElementById("ClaimProgramsError").innerHTML = null;
    document.getElementById("StartDateError").innerHTML = null;
    document.getElementById("EndDateError").innerHTML = null;
    this.EndDate = document.getElementById('EndDate').value;
    this.StartDate = document.getElementById('StartDate').value;
    if(!this.StartDate){
        flag=false;
        document.getElementById("StartDateError").innerHTML = "StartDate cannot be empty";
    }
    if(!this.EndDate){
        flag=false;
        document.getElementById("EndDateError").innerHTML = "EndDate cannot be empty";
    }
    let lettersAlphaNumeric = /^[0-9a-zA-Z]+$/;
    if (this.claimNumber.match(lettersAlphaNumeric)) {} else {
        flag=false;
        document.getElementById("ClaimNumberError").innerHTML = "Claim Number should be AlphaNumeric";
    }
    if (this.claimNumber.length > 9) {
        flag=false;
        document.getElementById("ClaimNumberError").innerHTML = "Maximum of 9 characters allowed";
    }
    if (this.claimPrograms.length > 20) {
        flag=false;
        document.getElementById("ClaimProgramsError").innerHTML = "Maximum of 20 alphabet characters allowed";
    }
    if (Date.parse(StartDate) > Date.parse(EndDate)) {
        flag=false;
        document.getElementById("EndDateError").innerHTML = "End Date cannot be lesser than Start Date";
    }
    if(flag) {
        location.href="view-claim-page.html";
    }
}

function cancelUpdate() {
    document.getElementById('ClaimNumber').value = "12345";
    document.getElementById('ClaimPrograms').value = "Accident";
    this.EndDate = document.getElementById('EndDate').value;
    this.StartDate = document.getElementById('StartDate').value;
    document.getElementById("ClaimNumberError").innerHTML = null;
    document.getElementById("ClaimProgramsError").innerHTML = null;
    document.getElementById("StartDateError").innerHTML = null;
    document.getElementById("EndDateError").innerHTML = null;
    if(StartDate==null)
        document.getElementById("StartDateError").innerHTML = "StartDate cannot be empty";
    if(EndDate== null)
        document.getElementById("EndDateError").innerHTML = "EndDate cannot be empty";
}

function editClaim() {
    location.href="update-claim-page.html";
}

function passwordvalidation() {
    this.name = document.getElementById('Name').value;
    this.password = document.getElementById('Password').value;
    document.getElementById("PasswordError").innerHTML = null;
    document.getElementById("UserNameError").innerHTML = null;
    let loginflag = false;
    let lettersAlphaNumeric = /^[0-9a-zA-Z]+$/;
    console.log("name: "+this.name);
    if(this.password < 4) {
        document.getElementById("PasswordError").innerHTML = "Minimum of 4 characters mandatory";
    }
    if(this.name === null) {
        document.getElementById("UserNameError").innerHTML = "Username cannot be empty";
    }
    else if(this.name.match(lettersAlphaNumeric)) {
        flag = true;
    }
    else{
        document.getElementById("UserNameError").innerHTML = "Special characters not allowed";
    }
    if(flag) {
        location.href="view-claim-page.html";
    }
}