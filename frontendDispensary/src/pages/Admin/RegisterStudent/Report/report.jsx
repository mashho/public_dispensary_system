import React, { useState, useEffect } from 'react'
import './report.css'
import SearchBox from '../../../../components/SearchBox/searchBox'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const Report = (props) => {
    const [searchMedicineName, setSearchmedicineName] = useState("")
    const [dropdown, setDropDown] = useState(false);
    const [data, setData] = useState([])
    const [selectedMedicine, setSelectedMedicine] = useState([]);
    const onChange = (value) => {
        setSearchmedicineName(value)
    }
    const fetchData = async () => {
        {
            // Please watch the Video for full code
        }
    }

    useEffect(() => {
        fetchData()
    }, [searchMedicineName])

    const addMedicine = (item) => {
        let exist = 0;
        {
            // Please watch the Video for full code
        }
        item = { ...item, requiredQuantity: "" }
        if (exist === 0) setSelectedMedicine([...selectedMedicine, item]);
        setSearchmedicineName("")
        setDropDown(false)
    }

    const onChangeHandle = (event, ind) => {
        const arr = selectedMedicine.map((item, index) => {
            {
                // Please watch the Video for full code
            }
        })
        setSelectedMedicine(arr)
    }
    const handleDelete = (item) => {
        let arr = selectedMedicine.filter((it) => item !== it._id);
        setSelectedMedicine(arr);
    }

    const checkInputInValid = () => {
        let invalid = false;
        selectedMedicine.map((item) => {
            if (item.requiredQuantity.trim().length === 0) {
                invalid = true;
            }
        })
        return invalid;
    }

    const handleOnSubmit = async () => {
        if (selectedMedicine.length === 0) return toast.error("Please select any medicine.");
        if (checkInputInValid()) return toast.error("Please enter all the fields.")
            {
                // Please watch the Video for full code
            }
    }
    return (
        <div className='report-regieter'>
            <div className='medicine-suggestion-block'>
                <SearchBox value={searchMedicineName} onChange={onChange} placeholder="Search Medicine" />

                {
                    {
                        // Please watch the Video for full code
                    }
                }
            </div>

            <div className='report-form-rows'>
                <div className='report-form-header'>
                    <div className='col-1-rm'>Medicine Name</div>
                    <div className='col-2-rm'>Quantity Left</div>
                    <div className='col-3-rm'>Required Quantity</div>
                    <div className='col-4-rm'>Delete</div>
                </div>

                <div className='report-form-row-block'>
                    {
                        selectedMedicine.map((item, index) => {
                            return (
                                {
                                    // Please watch the Video for full code
                                }
                            );
                        })
                    }


                </div>


            </div>

            <div className='modal-submit' onClick={handleOnSubmit}>Submit</div>
            <ToastContainer />

        </div>
    )
}

export default Report