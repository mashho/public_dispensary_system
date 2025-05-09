import React, { useState, useEffect } from 'react'
import './nearByModal.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const NearByModal = (props) => {

    const [inputField, setInputField] = useState({ name: "", address: "", contact: "" });

    const handleOnChange = (event, key) => {
        setInputField({ ...inputField, [key]: event.target.value })
    }

    useEffect(() => {
        if (props.clickedItem) {
            setInputField({ ...inputField, name: props.clickedItem.name, address: props.clickedItem.address, contact: props.clickedItem.address })
        }
    }, [])

    const updateFunc = async () => {
        {
            // Please watch the Video for full code
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputField.name.trim().length === 0 || inputField.address.trim().length === 0 || inputField.contact.trim().length === 0) return toast.error("Enter all the fields")

        {
            // Please watch the Video for full code
        }
    }
    return (
        <form className='register-form' onSubmit={handleSubmit}>
            <div className='register-form-div'>
                {
                    // Please watch the Video for full code
                }
            </div>


            <button type='submit' className='form-btn reg-btn' >{props.clickedItem ? "Update" : "Add"}</button>
            <ToastContainer />
        </form>
    )
}

export default NearByModal