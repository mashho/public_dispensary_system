import React, { useState, useEffect } from 'react'
import './gallary.css'
import axios from 'axios'
const Gallary = (props) => {


  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      props.showLoader()
      {
        // Please watch the Video for full code
      }
    }

    fetchData()
  }, [])
  return (
    <div className='gallary-home'>

      {
        data.map((item, index) => {
          return (
            {
              // Please watch the Video for full code
            }
          );
        })
      }

    </div>
  )
}

export default Gallary