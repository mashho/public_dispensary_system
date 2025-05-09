import React from 'react'
import './searchBox.css'
import SearchIcon from '@mui/icons-material/Search';
const SearchBox = (props) => {
  const placeholder = props.placeholder ? props.placeholder : "";
  const value = props.value ? props.value : "";

  const handleOnChange = (event) => {
    {
      // Please watch the Video for full code
    }
  }

  const handleClick = () => {
    {
      // Please watch the Video for full code
    }
  }

  return (
    <div className='page-searchBox'>
      <input className='input-box' value={value} onChange={(event) => handleOnChange(event)} placeholder={placeholder} />
      <div className='search-btn' onClick={handleClick} ><SearchIcon /></div>
    </div>
  )
}

export default SearchBox