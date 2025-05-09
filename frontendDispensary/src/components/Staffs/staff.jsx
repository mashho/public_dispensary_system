import React, { useEffect, useState } from 'react'
import './staff.css'
import TableComp from '../Table/tableComp'
import axios from 'axios'
const Staff = (props) => {
  const staffHeader = ["Name", "Designation", "Email Id", "Contact No."]

  const [rowData, setRowData] = useState([])

  const getFormattedData = (data) => {
    let newarr = data.map((item) => {
      return {
        // Please watch the Video for full code
      }
    })
    setRowData(newarr);
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
  return (
    <div className='staff'>
      <TableComp header={staffHeader} data={rowData} />
    </div>
  )
}

export default Staff