import {useState,useEffect} from 'react';
import formValidation from "./formUpdationValidation";

const useFormValidation = (validate) => {

// const[userData,setUser]=useState({
//         userName: '',
//         password: ''
// })

// const{} = formValidation(userData)

const[updatedUserData,setUpdatedUser]=useState({
    claimNumber: '',
    claimType: '',
    claimPrograms: '',
    startDate: '',
    endDate: '',
    empName: '',
    empId: ''
})

    const[errors,setErrors]=useState({});
    const[tableData,setTable]=useState({
        table: true
    });

    const handleFormChange = (e) => {
        const {id,value}=e.target;
        setUpdatedUser({
            ...updatedUserData,
            [id]:value
        });
    }

    const handleTableData = (e) => {
        // console.log("handleTableData", tableData.table, "e ", e.target.value, "claim num ", claimNumber);
        setTable({
            ...tableData,
            table: !tableData
        })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setErrors(validate(userData));
    //    }

       const handleFormSubmit = (e) => {
           console.log("handleform submit");
        // e.preventDefault();
        console.log("updateduserdata",updatedUserData);
        setErrors(formValidation(updatedUserData));
        console.log("before",tableData);
        if(errors.length === 0)
        setTable({
            table: true
        })
        
        console.log("after" ,tableData);
       }


    useEffect(() => {
        setTable({
            ...tableData,
            table: true    
        })
        if(Object.keys(errors).length===0 ){
        }  
    },[errors])

  return{errors,tableData,updatedUserData,setUpdatedUser, handleFormChange,handleTableData,handleFormSubmit}
};

export default useFormValidation;