import React from 'react'
import './footer.css'
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import CloudIcon from '@mui/icons-material/Cloud';
const Footer = () => {

    const todayDate = new Date()
    return (
        <div className='footer'>
            <div className='foooter-left'>
                <img className='footer-logo' src='https://static.vecteezy.com/system/resources/previews/018/902/537/original/university-college-school-badge-logo-design-image-education-badge-logo-design-university-high-school-emblem-free-vector.jpg' />
                <div className='footer-text-white'>XYZ Institute of Technology</div>
                <div className='footer-text-white'>Delhi</div>
                <div className='footer-text-smaller'>Delhi, Pauri (Garhwal)-23424</div>
                <div className='footer-text-smaller'><PhoneIcon /> 1346-257400</div>
                <div className='footer-text-smaller'><LanguageIcon /> www.xyz.ac.in</div>
            </div>

            <div className='foooter-center'>
                <div className='important-link'>Important Links</div>
                <a href='https://www.nituk.ac.in/anti-ragging-initiative/home' target='_blank'>Anti-Ragging Initiative</a>
                <a href='https://www.nituk.ac.in/career-counselling-and-placement/home' target='_blank'>Career Counselling and Placement Section</a>
                <a href='https://www.nituk.ac.in/right-to-informations' target='_blank'>Right To Information</a>
                <a href='https://www.nituk.ac.in/special-cell' target='_blank'>Special Cell</a>
                <a href='https://www.nituk.ac.in/grievance-cell' target='_blank'>Grievance Cell</a>
                <a href='https://nituk.ac.in/nituk-contact' target='_blank'>Contact Us</a>
                <a href='https://nituk.ac.in' target='_blank'>College Official Website</a>

            </div>

            <div className='footer-right'>
                <div className='footer-right-name'><CloudIcon/>XYZ Delhi</div>
                <div className='today-date-footer'>{todayDate.toDateString()}</div>
            </div>
        </div>
    )
}

export default Footer