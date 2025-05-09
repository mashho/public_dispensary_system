import React,{useState} from 'react'
import './registerStudent.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import SearchBox from '../../../components/SearchBox/searchBox';
import Modal from '../../../components/Modal/modal';
import Report from './Report/report';
import {toast,ToastContainer} from 'react-toastify';
import axios from 'axios'
const RegisterStudent = (props) => {
    const [searchStudent, setSearchStudent] = useState("");
    const [reportModal, setReportModal] = useState(false)

    const [studentDetail, setStudentDetail] = useState({ _id: "",email:"" ,name: "", roll: "", mobileNo: "", fatherName: "", fatherMobile: "", address: "", previous_health: "", age: "", bloodGroup: "" });
    
    const handleOnChangeInputField = (event, key) => {
        setStudentDetail({ ...studentDetail, [key]: event.target.value })
    }

    const openCloseModal = ()=>{
        setReportModal(prev=>!prev)
    }

    const handleOnChange = (value)=>{
        setSearchStudent(value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const handleSearch = async()=>{
        if (searchStudent.trim().length === 0) return toast.error("Please enter correct roll number.");
        props.showLoader();
        {
            // Please watch the Video for full code
        }
    }

    const handleUpdateFunc = async()=>{
        if(studentDetail.name.trim().length===0 || studentDetail.email.trim().length===0 || studentDetail.roll.trim().length===0 || studentDetail.mobileNo.trim().length===0) return toast.error("Name, Mobile No and Roll cant be empty");
        props.showLoader();
        const {_id,updatedAt,...student} = {...studentDetail};
        {
            // Please watch the Video for full code
        }

    }

    const registerStudent = async()=>{
        if(studentDetail.name.trim().length===0 || studentDetail.email.trim().length===0 || studentDetail.roll.trim().length===0 || studentDetail.mobileNo.trim().length===0) return toast.error("Name, Mobile No, Email and Roll cant be empty");
        props.showLoader();
        {
            // Please watch the Video for full code
        }
    }
  return (
    <div className='register-student'>
        <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link></div>

        <SearchBox handleClick={handleSearch} placeholder={"Search By Roll No."} value={searchStudent} onChange={handleOnChange} />
        <div className='register-form-block'>
            <div className='register-form-header'>Register Student</div>
            <form className='register-form' onSubmit={handleSubmit}>
                <div className='register-form-div'>
                {
                                // Please watch the Video for full code
                            }
                    <div className='register-input-box'>
                        <input value={studentDetail.roll} onChange={(event)=>handleOnChangeInputField(event,"roll")} className='input-box-register' placeholder='Roll No.' type='text'/>
                    </div>
                    <div className='register-input-box'>
                        <input value={studentDetail.mobileNo} onChange={(event)=>handleOnChangeInputField(event,"mobileNo")} className='input-box-register' placeholder='Mobile No.' type='text'/>
                    </div>
                    {
                                // Please watch the Video for full code
                            }
                </div>


                {
                    studentDetail?._id? <div className='block-divs'>
                        <button type='submit' className='form-btn reg-btn' onClick={handleUpdateFunc} >Update</button>
                        <button type='submit' className='form-btn reg-btn' onClick={openCloseModal} >Report</button>
                    </div>
                    : <button type='submit' className='form-btn reg-btn' onClick={registerStudent} >Register</button> 
                }
            </form>
        </div>
        {reportModal && <Modal header="Report" handleClose={openCloseModal} children={<Report studentDetail={studentDetail}/>}  />}
        <ToastContainer />
    </div>
  )
}

export default RegisterStudent