import React, { useState } from 'react'
import './adminDashboard.css'
import Modal from '../../../components/Modal/modal'
import ManageStaff from './ManageStaff/manageStaff'
import ManageEvent from './ManageEvent/manageEvent'
import { Link } from 'react-router-dom'

const AdminDashboard = (props) => {
  const [manageStaffModal, setmanageStaffModal] = useState(false)
  const [eventModal, setEventModal] = useState(false)
  const openCloseModal = (value) => {
    if (value === "event") {
      setEventModal(prev => !prev);
    } else {
      setmanageStaffModal(prev => !prev);
    }
  }

  let userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
  return (
    <div className='adminDashboard'>
      {
        // Please watch the Video for full code
      }

      <div className='admin-dashboard-cards'>
        <Link to={'/admin/register-student'} className='admin-dashboard-card'>
          Register Student
        </Link>
        <Link to={'/admin/manage-medicine'} className='admin-dashboard-card'>
          Manage Medicines
        </Link>
        {
          // Please watch the Video for full code
        }
      </div>
      {manageStaffModal && <Modal value={"staff"} handleClose={openCloseModal} header={"Manage Staffs"} children={<ManageStaff showLoader={props.showLoader} hideLoader={props.hideLoader} />} />}
      {eventModal && <Modal value={"event"} handleClose={openCloseModal} header={"Manage Events"} children={<ManageEvent showLoader={props.showLoader} hideLoader={props.hideLoader} />} />}
    </div>
  )
}

export default AdminDashboard