import React, { useState } from 'react'
import './forgotModal.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const ForgotModal = (props) => {

    const [step, setStep] = useState(1);
    const [buttonText, setButtonText] = useState("Send OTP.")
    const [inputField, setInputField] = useState({ email: "", otp: "", newPassword: "" })

    const handleOnChange = (event, key) => {
        setInputField({ ...inputField, [key]: event.target.value })
    }

    const sendOTPToMail = async () => {
        if (inputField.email.trim().length === 0) return toast.error("Please Enter Email")
        props.showLoader()
        {
            // Please watch the Video for full code
        }
    }


    const checkOtp = async () => {
        if (inputField.otp.trim().length === 0) return toast.error("Please Enter OTP")
        props.showLoader()

        {
            // Please watch the Video for full code
        }
    }

    const resetPassword = async () => {
        if (inputField.newPassword.trim().length === 0) return toast.error("Please Enter new password")
        props.showLoader()

        {
            // Please watch the Video for full code
        }
    }

    const handleForgotBtn = async () => {
        if (step === 1) {
            await sendOTPToMail()
        } else if (step === 2) {
            await checkOtp()
        } else if (step === 3) {
            await resetPassword()
        }
    }
    return (
        <div className='forgot-password-modal'>
            <div className='signup-page-card'>
                <div className='card-header-form'>Reset Password</div>
                {
                    // Please watch the Video for full code
                }
                <div className='form-btn forgot-password-btn' onClick={handleForgotBtn} >{buttonText}</div>
                <div className='form-btn forgot-password-btn' onClick={() => props.closeModal()}>Cancel</div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ForgotModal