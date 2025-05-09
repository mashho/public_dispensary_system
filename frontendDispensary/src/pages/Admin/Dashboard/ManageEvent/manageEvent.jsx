import React, { useState, useEffect } from 'react'
import './manageEvent.css'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const ManageEvent = (props) => {
    const [title, setTitle] = useState("");
    const [data, setData] = useState([])

    const fetchData = async () => {
        props.showLoader();
        {
            // Please watch the Video for full code
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSubmitEvent = async (e) => {
        e.preventDefault();
        if (title.trim().length === 0) return toast.error("Please Enter Title");
        props.showLoader();
        {
            // Please watch the Video for full code
        }
    }
    const filterOutEvent = (id) => {
        let newArr = data.filter((item) => item._id !== id);
        setData(newArr)
    }

    const handleDeleteEvent = async (id) => {
        props.showLoader();
        {
            // Please watch the Video for full code
        }
    }

    return (
        <div className='add-staffs-box'>
            <form onSubmit={handleSubmitEvent} className='register-form'>
                {
                    // Please watch the Video for full code
                }

            </form>

            <div className='list-staffs'>

                {
                    data.map((item, index) => {
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

export default ManageEvent