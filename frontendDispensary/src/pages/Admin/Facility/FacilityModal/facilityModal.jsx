import React, { useState, useEffect } from 'react'
import './facilityModal.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const FacilityModal = (props) => {

    const [inputField, setInputField] = useState({ title: "", description: "" });
    const handleOnChange = (event, key) => {
        setInputField({ ...inputField, [key]: event.target.value });
    }

    useEffect(() => {
        if (props.clickedItem) {
            setInputField({ ...inputField, title: props.clickedItem.title, description: props.clickedItem.description });
        }
    }, [])
    const updateFacility = async () => {
        {
            // Please watch the Video for full code
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        {
            // Please watch the Video for full code
        }

    }
    return (
        <div className='facilty-modal'>
            <form className='register-form' onSubmit={handleSubmit}>
                {
                    // Please watch the Video for full code
                }


                <button type='submit' className='form-btn reg-btn' >{props.clickedItem ? "Update" : "Add"}</button>
                <ToastContainer />
            </form>
        </div>
    )
}

export default FacilityModal