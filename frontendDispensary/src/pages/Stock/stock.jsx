import React, { useState, useEffect } from 'react'
import './stock.css'
import SearchBox from '../../components/SearchBox/searchBox'
import TableComp from '../../components/Table/tableComp';
import axios from 'axios'
const Stock = (props) => {
    const [medicineName, setMedicineName] = useState("");
    const [stocks, setStocks] = useState([]);

    const handleInputChange = (value) => {
        setMedicineName(value)
    }

    const headers = ["Sr No.", "Name", "Quantity", "Usage"];

    const getFormattedData = (data) => {
        let newarr = data.map((item, ind) => {
            return { srNo: ind + 1, name: item.name, quantity: item.quantity, usage: item.usage }
        })
        setStocks(newarr);
    }

    const fetchData = async () => {
        props.showLoader();
        {
            // Please watch the Video for full code
        }
    }

    useEffect(() => {
        fetchData()
    }, [medicineName])
    return (
        <div className='stock-page'>
            <SearchBox placeholder="Seach Medicine" value={medicineName} onChange={handleInputChange} />
            {
                // Please watch the Video for full code
            }
        </div>
    )
}

export default Stock