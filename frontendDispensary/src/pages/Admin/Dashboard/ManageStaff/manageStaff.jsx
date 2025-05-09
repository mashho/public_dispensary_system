import React, { useState, useEffect } from 'react'
import './manageStaff.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
const ManageStaff = (props) => {
    const [inputField, setInputField] = useState({ name: "", email: "", password: "", designation: "", mobileNo: "" })
    const [staffs, setStaffs] = useState([])
    const [clickedStaff, setClickedStaff] = useState(null);

    const handleOnChange = (event, key) => {
        setInputField({ ...inputField, [key]: event.target.value })
    }

    const fetchData = async () => {
        props.showLoader()
        {
            // Please watch the Video for full code
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleUpdate = async () => {

        await axios.put(`http://localhost:4000/api/auth/update-staff/${clickedStaff?._id}`, inputField, { withCredentials: true }).then(response => {
            window.location.reload();
        }).catch(err => {
            toast.error(err?.response?.data?.error)

        })
    }

    const handleAddStaff = async (e) => {
        e.preventDefault()

        if (clickedStaff) {
            handleUpdate();
            return;
        }

        if (inputField.name.trim().length === 0 || inputField.email.trim().length === 0 || inputField.password.trim().length === 0 || inputField.designation.trim().length === 0 || inputField.mobileNo.trim().length === 0) return toast.error("Please fill all the details.");
        props.showLoader()
        {
            // Please watch the Video for full code
        }
    }

    const handleOnEditBtn = async (item) => {
        setClickedStaff(item);
        setInputField({ ...inputField, ...item })
    }

    const filterOutData = (id) => {
        let newArr = staffs.filter((item) => item?._id !== id);
        setStaffs(newArr)
    }

    const handleDelete = async (id) => {
        {
            // Please watch the Video for full code
        }
    }
    return (
        <div className='add-staffs-box'>
            <form className='register-form'>
                <div className='register-form-div'>
                    <div className='register-input-box'>
                        <input value={inputField.name} onChange={(event) => handleOnChange(event, "name")} className='input-box-register' type='text' placeholder='Staff Name' />
                    </div>
                    {
                        // Please watch the Video for full code
                    }
                </div>
                <button type='submit' className='form-btn reg-btn' onClick={handleAddStaff}>{!clickedStaff ? "Add" : "Update"}</button>

            </form>

            <div className='list-staffs'>

                {
                    staffs.map((item, index) => {
                        return (
                            <div className='list-staff'>
                                {
                                    // Please watch the Video for full code
                                }

                            </div>
                        );
                    })
                }





            </div>
            <ToastContainer />
        </div>
    )
}

export default ManageStaff