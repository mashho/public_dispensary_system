import React from 'react'

const StudentAllFiles = (props) => {
    return (
        <div className='record-modal'>


            <div className='student-modal-report'>
                <div>{props.studnetAllDetails[0]?.student?.name}</div>
                <div>{props.studnetAllDetails[0]?.student?.email}</div>
                <div>{props.studnetAllDetails[0]?.roll}</div>
            </div>

            <div className='student-details-scroll'>
                {
                    props.studnetAllDetails.map((item) => {
                        return (
                            <div className='student-modal-detail'>
                                <div className='student-modal-header'>
                                    {item?.createdAt.slice(0, 10).split("-").reverse().join("-")}
                                </div>

                                <div className='student-modal-body-student'>
                                    <div className='student-modal-body-header'>
                                        <div>Medicine Name</div>
                                        <div>Quantity</div>
                                    </div>

                                    <div className='student-modal-body-item'>
                                        {
                                            // Please watch the Video for full code
                                        }

                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>

        </div>
    )
}

export default StudentAllFiles