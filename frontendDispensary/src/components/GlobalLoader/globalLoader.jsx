import React from 'react'
import './globalLoader.css'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const GlobalLoader = () => {
    return (
        <div className='global-loader'>
            <Box sx={{ display: 'flex' }} className="loader-size">
                <CircularProgress className='loader'/>
            </Box>
        </div>
    )
}

export default GlobalLoader