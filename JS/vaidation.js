function updateClaimValidation() {
    this.claimNumber = document.getElementById('ClaimNumber').value;
    this.claimPrograms = document.getElementById('ClaimPrograms').value;
    document.getElementById("ClaimNumberError").innerHTML = null;
    document.getElementById("ClaimProgramsError").innerHTML = null;
    document.getElementById("StartDateError").innerHTML = null;
    document.getElementById("EndDateError").innerHTML = null;
    this.EndDate = document.getElementById('EndDate').value;
    this.StartDate = document.getElementById('StartDate').value;
    console.log("start date " + StartDate);
    if(StartDate==null)
        document.getElementById("StartDateError").innerHTML = "StartDate cannot be empty";
    if(EndDate== null)
        document.getElementById("EndDateError").innerHTML = "EndDate cannot be empty";
    console.log("inside validation claomnumber", this.claimNumber);
    var lettersAlphaNumeric = /^[0-9a-zA-Z]+$/;
    if (this.claimNumber.match(lettersAlphaNumeric)) {} else {
        document.getElementById("ClaimNumberError").innerHTML = "Claim Number should be AlphaNumeric";
    }
    if (this.claimNumber.length > 9) {
        document.getElementById("ClaimNumberError").innerHTML = "Maximum of 9 characters allowed";
    }
    if (this.claimPrograms.length > 20) {
        document.getElementById("ClaimProgramsError").innerHTML = "Maximum of 20 alphabet characters allowed";
    }
    console.log("Date startdate "+ this.StartDate);
    console.log("Date this.startdate "+ Date.parse(this.StartDate));
    console.log("Date enddate "+ this.EndDate);
    if (this.StartDate <= this.EndDate) {
        alert("less");
    }
}

function cancelUpdate() {
    console.log("inside cancel;");
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
    var lettersAlphaNumeric = /^[0-9a-zA-Z]+$/;
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