import React, { useState, useEffect } from 'react'
import './manageMedicine.css'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBox from '../../../components/SearchBox/searchBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '../../../components/Modal/modal';
import MedicineModal from './MedicineModal/medicineModal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const ManageMedicine = (props) => {
    const [medicineSearch, setMedicineSearch] = useState("")
    const [addModal, setAddModal] = useState(false);
    const [clickedMedicine,setClickedMedicine] = useState(null)

    const [data, setData] = useState([])

    const onOffmodal = () => {
        if(addModal){
            setClickedMedicine(null)
        }
        setAddModal(prev => !prev)
    }

    const onChangeValue = (value) => {
        setMedicineSearch(value)
    }
    const fetchData = async () => {
        props.showLoader();
        {
            // Please watch the Video for full code
        }
    }

    const handleEdit = (item)=>{
        setClickedMedicine(item)
        setAddModal(true)
    }

    const filterOutMedicine = (id)=>{
        let newArr = data.filter((item)=>item._id!==id);
        setData(newArr)
    }

    const handleDelete = async(id)=>{
        props.showLoader();
        {
            // Please watch the Video for full code
        }
    }

    useEffect(() => {

        fetchData()
    }, [medicineSearch])
    return (
        <div className='manageMedicine'>
            <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link></div>

            <div className='top-manage-medicine'>
                <SearchBox placeholder="Search Medicine " value={medicineSearch} onChange={onChangeValue} />
                <div className='add-manage-medicine' onClick={onOffmodal} >Add</div>
            </div>

            <div className='manageMedicine-card'>
                <div className='report-form-rows'>
                {
                                // Please watch the Video for full code
                            }

                    <div className='report-form-row-block'>
                        {
                            {
                                // Please watch the Video for full code
                            }
                        }

                        {
                            data.length === 0 && <div className='report-form-row' >
                                <div className=''>No Any medicine yet</div>

                            </div>
                        }


                    </div>


                </div>
            </div>
            {
                addModal && <Modal header="Add Medicine" handleClose={onOffmodal} children={<MedicineModal clickedMedicine={clickedMedicine} showLoader={props.showLoader} hideLoader={props.hideLoader} />} />
            }
            <ToastContainer />
        </div>
    )
}

export default ManageMedicine