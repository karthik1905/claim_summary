const initialstate = {
    empId: '',
    empName: '',
    claimNumber: '',
    claimType: '',
    claimPrograms: '',
    startDate: '',
    endDate: ''
};
    
const claimReducer = (state = initialstate, action) => {    
    const {type,payload} = action;
    switch (type) { 
        case 'EDIT':    
            return {    
                ...state,  
                empId: payload.empId,
                empName: payload.empName,
                claimNumber: payload.claimNumber,
                claimType: payload.claimType,
                claimPrograms: payload.claimPrograms 
            }     
        default:    
            return state;    
    }   
};    
    
export default claimReducer;