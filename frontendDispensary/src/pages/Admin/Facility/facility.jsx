import React, { useState, useEffect } from 'react'
import './facility.css'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '../../../components/Modal/modal';
import FacilityModal from './FacilityModal/facilityModal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const Facility = (props) => {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([]);
    const [clickedItem,setClickedItem] = useState(null)

    const onOFModal = () => {
        if(modal){
            setClickedItem(null)
        }
        setModal(prev => !prev)
    }

    const fetchData = async () => {
        props.showLoader();
        {
            // Please watch the Video for full code
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleEdit = (item)=>{
        setClickedItem(item)
        setModal(true)

    }

    const filterOutData = (id)=>{
        let newArr = data.filter((item)=>item._id!==id);
        setData(newArr);
    }
    const handlDelete = async(id)=>{
        props.showLoader()
        {
            // Please watch the Video for full code
        }
    }
    return (
        <div className='admin-facility'>
            <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link></div>

            <div className='admin-facility-header'>
                <div>Facilities</div>
                <div className='add-facility-btn' onClick={onOFModal}>Add </div>
            </div>

            <div className='admin-facility-rows'>

                {
                    data.map((item) => {
                        return (
                            {
                                // Please watch the Video for full code
                            }
                        );
                    })
                }




            </div>
            {modal && <Modal headers="Add Facility" handleClose={onOFModal} children={<FacilityModal clickedItem={clickedItem} />} />}
            <ToastContainer />
        </div>
    )
}

export default Facility