import React, { useState, useEffect } from 'react'
import './nearByHospitals.css'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '../../../components/Modal/modal';
import NearByModal from './NearByModal/nearByModal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const NearByHospital = (props) => {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([]);
    const [clickedItem, setClickedItem] = useState(null)
    const onOFModal = () => {
        if (modal) {
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

    const handleEdit = (item) => {
        setClickedItem(item);
        setModal(true)
    }

    const filterOutData = (id) => {
        let newArrr = data.filter((item) => item._id !== id);
        setData(newArrr)
    }

    const handleDelete = async (id) => {
        props.showLoader();
        {
            // Please watch the Video for full code
        }
    }

    return (
        <div className='admin-facility'>
            <div className='go-back'><Link to={'/admin/dashboard'}><ArrowBackIcon /> Back To Dashboard</Link></div>

            {
                // Please watch the Video for full code
            }

            <div className='admin-facility-rows'>

                {
                    data.map((item, index) => {
                        return (
                            <div className='admin-facility-row' key={item._id}>

                                {
                                    // Please watch the Video for full code
                                }

                            </div>
                        );
                    })
                }




            </div>
            {modal && <Modal headers="Add Facility" handleClose={onOFModal} children={<NearByModal clickedItem={clickedItem} />} />}
            <ToastContainer />
        </div>
    )
}

export default NearByHospital