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
    console.log(action.payload);
    switch (type) { 
        case 'EDIT':    
            return {    
                ...state,  
                empId: payload.empId,
                empName: payload.empName,
                claimNumber: payload.claimNumber,
                claimType: payload.claimType,
                claimPrograms: payload.claimPrograms,
                startDate: payload.startDate,
                endDate: payload.endDate
            };  
        default:    
            return state;    
    }   
};    
    
export default claimReducer;