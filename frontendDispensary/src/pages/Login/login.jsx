import React, { useState } from 'react'
import './login.css'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ForgotModal from '../../components/FogotModal/forgotModal'
const Login = (props) => {

    const navigate = useNavigate();

    const [forgotPassword, setForgotPassword] = useState(false);
    const [loginField, setLoginField] = useState({ email: "", password: "" });
    const [registerField, setRegisterField] = useState({ name: "", email: "", password: "", roll: "" });


    const handleForgotModal = () => {
        setForgotPassword(prev => !prev)
    }

    const handleOnChange = (event, key, card) => {
        if (card === "login") {
            setLoginField({ ...loginField, [key]: event.target.value })
        } else {
            setRegisterField({ ...registerField, [key]: event.target.value })
        }
    }

    const handleLogin = async () => {
        if (loginField.email.trim() === "" || loginField.password.trim() === "") return toast.error("Please enter the credentials");
        props.showLoader();

        {
            // Please watch the Video for full code
        }

    }

    const handleRegister = async () => {
        {
            // Please watch the Video for full code
        }
    }

    return (
        <div className='login-page'>

            <div className='login-page-card'>
                {
                    // Please watch the Video for full code
                }
            </div>

            <div className='signup-page-card'>
                <div className='card-header-form'>Register</div>
                <div className='form-input-fields'>

                    {
                        // Please watch the Video for full code
                    }
                </div>
            </div>
            <ToastContainer />
            {
                forgotPassword && <ForgotModal showLoader={props.showLoader} hideLoader={props.hideLoader} closeModal={handleForgotModal} />
            }

        </div>
    )
}

export default Login