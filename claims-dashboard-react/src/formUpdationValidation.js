export default function formValidation(userData){
    let claimNum  = userData.claimNumber;
    let claimPrgm = userData.claimPrograms;
    let startDate = userData.startDate;
    let endDate   = userData.endDate;
    let errors = {}
    let lettersAlphaNumeric = /^[0-9a-zA-Z-]+$/;
    let dateReg = /^\d{4}([./-])\d{2}\1\d{2}$/

    if(claimNum.length === 0){
        errors.claimNumberError = "Cannot be empty";
    }
    else if (!claimNum.match(lettersAlphaNumeric)) 
	{
        errors.claimNumberError =  "No Special Characters allowed";
	}
    if (claimPrgm.length > 20) {
        errors.claimProgramsError  = "Please enter maximum of 20 digits";
    }
	if (claimPrgm.length === 0) {
        errors.claimProgramsError = "Cannot be empty";
    }
    if (!startDate.match(dateReg)) {
        errors.startDateError = "Please enter the valid date";
    }
    if (!endDate.match(dateReg)) {
        errors.endDateError = "Please enter the valid date";
    }
    if (Date.parse(startDate) > Date.parse(endDate)) {
        errors.endDateError = "End Date cannot be lesser than Start Date";
      }
    return errors;
}


