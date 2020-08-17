function validation() {
    this.claimNumber = document.getElementById('ClaimNumber').value;
    this.claimPrograms = document.getElementById('ClaimPrograms').value;
    document.getElementById("ClaimNumberError").innerHTML = null;
    document.getElementById("ClaimProgramsError").innerHTML = null;
    console.log("inside validation", this.claimNumber, this.claimPrograms);
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
}

function editpage() {
    location.href="update-page.html";
}

function passwordvalidation() {
    this.name = document.getElementById('Name').value;
    this.password = document.getElementById('Password').value;
    let loginflag = false;
    var lettersAlphaNumeric = /^[0-9a-zA-Z]+$/;
    console.log("name: "+this.name);
    if(this.password < 4) {
        alert("Password should be atleast 4 characters");
    }
    if(this.name === null) {
        alert("Username cannot be empty");
    }
    else if(this.name.match(lettersAlphaNumeric)) {
        flag = true;
    }
    else{
        alert("Username is not allowed with special characters");
    }
    if(flag) {
        location.href="first-page.html";
    }
}