function updateClaimValidation() {
  let flag = true;
  this.claimNumber = document.getElementById("ClaimNumber").value;
  this.claimPrograms = document.getElementById("ClaimPrograms").value;
  document.getElementById("ClaimNumberError").innerHTML = null;
  document.getElementById("ClaimProgramsError").innerHTML = null;
  document.getElementById("StartDateError").innerHTML = null;
  document.getElementById("EndDateError").innerHTML = null;
  this.EndDate = document.getElementById("EndDate").value;
  this.StartDate = document.getElementById("StartDate").value;
  if (!this.StartDate) {
    flag = false;
    document.getElementById("StartDateError").innerHTML =
      "StartDate cannot be empty";
  }
  if (!this.EndDate) {
    flag = false;
    document.getElementById("EndDateError").innerHTML =
      "EndDate cannot be empty";
  }
  let lettersAlphaNumeric = /^[0-9a-zA-Z]+$/;
  if (this.claimNumber.match(lettersAlphaNumeric)) {
  } else {
    flag = false;
    document.getElementById("ClaimNumberError").innerHTML =
      "Claim Number should be AlphaNumeric";
  }
  if (this.claimNumber.length > 9) {
    flag = false;
    document.getElementById("ClaimNumberError").innerHTML =
      "Maximum of 9 characters allowed";
  }
  if (this.claimPrograms.length > 20) {
    flag = false;
    document.getElementById("ClaimProgramsError").innerHTML =
      "Maximum of 20 alphabet characters allowed";
  }
  if (Date.parse(StartDate) > Date.parse(EndDate)) {
    flag = false;
    document.getElementById("EndDateError").innerHTML =
      "End Date cannot be lesser than Start Date";
  }
  if (flag) {
    location.href = "view-claim.html";
  }
}

function cancelUpdate() {
  document.getElementById("ClaimNumber").value = "12345";
  document.getElementById("ClaimPrograms").value = "Accident";
  this.EndDate = document.getElementById("EndDate").value;
  this.StartDate = document.getElementById("StartDate").value;
  document.getElementById("ClaimNumberError").innerHTML = null;
  document.getElementById("ClaimProgramsError").innerHTML = null;
  document.getElementById("StartDateError").innerHTML = null;
  document.getElementById("EndDateError").innerHTML = null;
  if (StartDate == null)
    document.getElementById("StartDateError").innerHTML =
      "StartDate cannot be empty";
  if (EndDate == null)
    document.getElementById("EndDateError").innerHTML =
      "EndDate cannot be empty";
}

function editClaim() {
  location.href = "update-claim.html";
}
function home() {
  console.log("inside home");
  location.href = "login.html"
}

function tablePopulation() {
  console.log("inside tablepopulation func");
  var cols = [];
  var list = [
    {
      "Employee Id": "123",
      "Employee Name": "Karthik",
      "Claim Number": "XXX-XXX-XXX",
      "Claim Type": "Submitted",
      "Claim Program": "Checkup",
      "Start Date": "20-05-2020",
      "End Date": "31-06-2020",
      "Action":`<button type="button" onClick="editClaim()" class="btn btn-primary">Edit</button>`
    },
    {
      "Employee Id": "456",
      "Employee Name": "Suresh",
      "Claim Number": "XXX-XXX-XXX",
      "Claim Type": "Paid",
      "Claim Program": "Surgery",
      "Start Date": "20-06-2020",
      "End Date": "31-07-2020",
      "Action":`<button type="button" onClick="editClaim()" class="btn btn-primary">Edit</button>`
    },
    {
      "Employee Id": "789",
      "Employee Name": "Ramesh",
      "Claim Number": "XXX-XXX-XXX",
      "Claim Type": "Aproved",
      "Claim Program": "Accident",
      "Start Date": "20-07-2020",
      "End Date": "31-08-2020",
      "Action":`<button type="button" onClick="editClaim()" class="btn btn-primary">Edit</button>`
    },
  ];

  for (var i = 0; i < list.length; i++) {
    for (var k in list[i]) {
      if (cols.indexOf(k) === -1) {
        // Push all keys to the array
        cols.push(k);
      }
    }
  }

  // Create a table element
  var table = document.createElement("table");

  // Create table row tr element of a table
  var tr = table.insertRow(-1);

  for (var i = 0; i < cols.length; i++) {
    // Create the table header th element
    var theader = document.createElement("th");
    theader.innerHTML = cols[i];

    // Append columnName to the table row
    tr.appendChild(theader);
  }

  // Adding the data to the table
  for (var i = 0; i < list.length; i++) {
    // Create a new row
    trow = table.insertRow(-1);
    for (var j = 0; j < cols.length; j++) {
      var cell = trow.insertCell(-1);

      // Inserting the cell at particular place
      cell.innerHTML = list[i][cols[j]];
    }
  }

  // Add the newely created table containing json data
  var el = document.getElementById("table");
  // el.innerHTML = "";
  el.appendChild(table);
}

function passwordvalidation() {
  this.name = document.getElementById("Name").value;
  this.password = document.getElementById("Password").value;
  document.getElementById("PasswordError").innerHTML = null;
  document.getElementById("UserNameError").innerHTML = null;
  let loginflag = false;
  let lettersAlphaNumeric = /^[0-9a-zA-Z]+$/;
  console.log("name: " + this.name);
  if (this.password < 4) {
    document.getElementById("PasswordError").innerHTML =
      "Minimum of 4 characters mandatory";
  }
  if (this.name === null) {
    document.getElementById("UserNameError").innerHTML =
      "Username cannot be empty";
  } else if (this.name.match(lettersAlphaNumeric)) {
    flag = true;
  } else {
    document.getElementById("UserNameError").innerHTML =
      "Special characters not allowed";
  }
  if (flag) {
    location.href = "view-claim.html";
  }
}
