export default function formValidation(userData){
    console.log("userdata",userData);
    let claimNum  = "";
    claimNum  = userData.claimNumber;
    let claimType = "";
    claimType = userData.claimType;
    let claimPrgm = "";
    claimPrgm = userData.claimPrograms;
    let startDate = userData.startDate;
    let endDate   = userData.endDate;
    let errors = {};
    let lettersAlphaNumeric = /^[0-9-]+$/;
    let dateReg = /^\d{4}([./-])\d{2}\1\d{2}$/;
    if(claimNum.length === 0)
        errors.claimNumberError = "Cannot be empty";
    else if (!claimNum.match(lettersAlphaNumeric)) 
        errors.claimNumberError =  "No Special Characters allowed"; 
    else if(claimNum.length > 9){
        errors.claimNumberError = "Cannot exceed 9 characters";
    }
    if (claimPrgm.length > 20) {
        errors.claimProgramsError  = "Please enter maximum of 20 digits";
    } else if (claimPrgm.length === 0) {
        errors.claimProgramsError = "Cannot be empty";
    }
    if(claimType === "Select")
        errors.claimTypeError = "Please Select a valid ClaimType"
    if (!startDate.match(dateReg)) {
        errors.startDateError = "Please enter the valid date";
    }
    if (!endDate.match(dateReg)) {
        errors.endDateError = "Please enter the valid date";
    }
    if (Date.parse(startDate) > Date.parse(endDate)) {
        errors.endDateError = "End Date cannot be lesser than Start Date";
      }
      console.log("errors", errors);
    return errors;
}


