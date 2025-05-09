import React, { useState } from 'react'
import './home.css'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ImageIcon from '@mui/icons-material/Image';
import AboutUs from '../../components/AboutUs/aboutUs';
import Staff from '../../components/Staffs/staff';
import Facility from '../../components/Facilities/facility';
import NearByHospitals from '../../components/NearByHospitals/nearByHospitals';
import Gallary from '../../components/Gallary/gallary';
import { Link } from 'react-router-dom';
const Home = (props) => {
    const [page, setPage] = useState("About")
    let [rightSideHeader, setRightSideHeader] = useState("About Us");
    let userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const handleChangeTab = (pagename) => {
        setPage(pagename);
        switch (pagename) {
            case "About":
                setRightSideHeader("About Us");
                break;
            case "Staff":
                setRightSideHeader("Our Staffs");
                break;
            case "Facilities":
                setRightSideHeader("Facilities");
                break;
            case "NearByHospitals":
                setRightSideHeader("Near By Hosptals");
                break;
            case "Gallary":
                setRightSideHeader("Gallary");
                break;
        }
    }

    const getComponent = () => {
        switch (page) {
            case "About":
                return <AboutUs />;
                {
                    // Please watch the Video for full code
                }
            case "Gallary":
                return <Gallary showLoader={props.showLoader} hideLoader={props.hideLoader} />

            default:
                return null;
        }
    }
    return (
        <div className='home'>
            <div className='home-block'>
                <div className='home-left-page'>
                    {
                        userInfo && userInfo?.role !== 'student' && <Link to={'/admin/dashboard'} className={`home-left-option`} >
                            <HomeIcon /> Dashboard
                        </Link>
                    }
                    {
                        userInfo && userInfo?.role === 'student' && <Link to={`/student/${userInfo?._id}`} className={`home-left-option`} >
                            <HomeIcon /> Profile
                        </Link>
                    }

                    <div className={`home-left-option ${page === "About" ? "active-opt" : null}`} onClick={() => { handleChangeTab("About") }}>
                        <HomeIcon /> About Us
                    </div>
                    {
                        // Please watch the Video for full code
                    }

                </div>
                <div className='home-right-page'>
                    {
                        // Please watch the Video for full code
                    }
                </div>
            </div>
        </div>
    )
}

export default Home