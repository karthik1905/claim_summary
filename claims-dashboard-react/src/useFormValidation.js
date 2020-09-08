import React,{useState,useEffect} from 'react';
import axios from 'axios';


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

const[tableValues,setTableValues]=useState([{
    claimNumber: '',
    claimType: '',
    claimPrograms: '',
    startDate: '',
    endDate: '',
    empName: '',
    empId: ''
}])

    const[errors,setErrors]=useState({});
    const[tableData,setTable]=useState({
        table: true
    });

    const handleFormChange = (e) => {
        console.log("handleformchange", e.target.value);
        const {id,value}=e.target;
        setUpdatedUser({
            ...updatedUserData,
            [id]:value
        })
    }

    const handleTableData = (e) => {
        console.log("handleTableData", tableData.table);
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
        e.preventDefault();
        setErrors(validate(updatedUserData));
        axios.post("http://localhost:8080/api/products", updatedUserData);
       }

       const getTable = (e) => {
           console.log("get table func");
           e.preventDefault();
           axios.get("http://localhost:8080/api/products",);
       }

    useEffect(() => {
        console.log(">>> useEffect");
        setUpdatedUser({
            ...tableData,
            table: true    
        })
        getTable();
        if(Object.keys(errors).length===0 ){
            console.log("business logic to persist object into db");
            // handleFormSubmit();
        }  
    },[errors])

  return{errors,tableData,tableValues,getTable,handleFormChange,handleTableData,handleFormSubmit}
};

export default useFormValidation;