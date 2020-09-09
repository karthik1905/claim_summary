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
        console.log("handle table data");
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
        e.preventDefault();
        // setErrors(validate(updatedUserData));
        console.log("before",tableData);
        setTable({
            table: true
        })
        
        console.log("after" ,tableData);
        // axios.post("http://localhost:8080/api/products", updatedUserData);
       }

    //    const getTable = (e) => {
          
    //    }

    useEffect(() => {
        console.log(">>> useEffect");
        setUpdatedUser({
            ...tableData,
            table: true    
        })
        if(Object.keys(errors).length===0 ){
            console.log("business logic to persist object into db");
            // handleFormSubmit();
        }  
    },[errors])

  return{errors,tableData,handleFormChange,handleTableData,handleFormSubmit}
};

export default useFormValidation;