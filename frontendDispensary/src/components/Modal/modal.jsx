import React from 'react'
import './modal.css'
import CloseIcon from '@mui/icons-material/Close';
const Modal = (props) => {
    const header = props.header ? props.header : "Modal";
    const children = props.children ? props.children : null;

    const onCloseBtn = () => {
        if (props.handleClose) {
            props.handleClose(props.value)
        }
    }
    return (
        <div className='modal'>
            <div className='modal-card'>
                {
                    // Please watch the Video for full code
                }
            </div>
        </div>
    )
}

export default Modal