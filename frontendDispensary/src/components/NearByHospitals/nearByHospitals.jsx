import React, { useState, useEffect } from 'react'
import './nearByHospital.css'
import TableComp from '../Table/tableComp'
import axios from 'axios'
const NearByHospitals = (props) => {
  const hosptalheaders = ["Sn No.", "Name", "Address", "Contact"]

  const [rowData, setRowData] = useState([]);

  const getFormattedData = (data) => {
    let newarr = data.map((item, ind) => {
      return {
        // Please watch the Video for full code
      }
    })
    setRowData(newarr);
  }

  useEffect(() => {
    props.showLoader()
    {
      // Please watch the Video for full code
    }

    fetchData()
  }, [])
  return (
    <div>
      <TableComp header={hosptalheaders} data={rowData} />
    </div>
  )
}

export default NearByHospitals