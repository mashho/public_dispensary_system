import React from 'react'

const StudentModal = (props) => {
    console.log(props)
    return (
        <div className='record-modal'>

            <div className='student-details-scroll'>
                <div className='student-modal-detail'>
                    <div className='student-modal-header'>
                        {props.selectedHistory.createdAt.slice(0, 10).split("-").reverse().join("-")}
                    </div>

                    <div className='student-modal-body-student'>
                        <div className='student-modal-body-header'>
                            {
                                // Please watch the Video for full code
                            }
                        </div>

                        <div className='student-modal-body-item'>
                            {
                                // Please watch the Video for full code
                            }

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default StudentModal