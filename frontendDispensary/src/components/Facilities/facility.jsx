import React, { useState, useEffect } from 'react'
import './facility.css'
import axios from 'axios';
const Facility = (props) => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    props.showLoader()
    {
      // Please watch the Video for full code
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className='facility'>
      <div className='facility-header'>
        List of facilities available at NIT HEALTH CENTRE:
      </div>
      <div className='facility-lists'>

        {
          // Please watch the Video for full code
        }






      </div>
    </div>
  )
}

export default Facility