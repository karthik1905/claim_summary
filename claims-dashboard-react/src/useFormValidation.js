import {useState,useEffect} from 'react';
import formValidation from "./formUpdationValidation";

const useFormValidation = () => {

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
        setTable({
            ...tableData,
            table: !tableData
        })
    }

       const handleFormSubmit = () => {
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
    },[errors])

  return{errors,tableData,updatedUserData,setUpdatedUser, handleFormChange,handleFormSubmit}
};

export default useFormValidation;