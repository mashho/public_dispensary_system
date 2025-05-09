import React, { useState, useEffect } from 'react'
import './medcineModal.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const MedicineModal = (props) => {
    const [medicine, setMedicine] = useState({ name: "", quantity: "", usage: "" });
    const handleOnChange = (event, key) => {
        setMedicine({ ...medicine, [key]: event.target.value })
    }
    useEffect(() => {
        if (props.clickedMedicine) {
            setMedicine({ ...medicine, name: props.clickedMedicine.name, quantity: props.clickedMedicine.quantity, usage: props.clickedMedicine.usage })
        }
    }, [])

    const updateValue = async () => {
        props.showLoader();
        {
            // Please watch the Video for full code
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (props.clickedMedicine) {
            updateValue()
            return;
        }


        if (medicine.name.trim().length === 0 || !medicine.quantity || medicine.usage.trim().length === 0) {
            return toast.error("Please enter all fields")
        }
        {
            // Please watch the Video for full code
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            {
                // Please watch the Video for full code
            }
            <button type='submit' className='form-btn reg-btn' >{props.clickedMedicine ? "Update" : "Add"}</button>
            <ToastContainer />
        </form>
    )
}

export default MedicineModal